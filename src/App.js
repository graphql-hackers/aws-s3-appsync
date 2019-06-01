import React from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import Amplify, {Auth} from 'aws-amplify';
// Get the aws resources configuration parameters
import awsmobile from './aws-exports'; // if you are using Amplify CLI
import client from './awsClient';
import {v4 as uuid } from 'uuid';
import {createTodo } from './graphql/mutations';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';


Amplify.configure(awsmobile);

function App() {

  function handleFileChange(fileInput) {
     let selectedFile = fileInput[0];
    (async () => {
      let file;
       console.log("input" , fileInput);
      if (selectedFile) { // selectedFile is the file to be uploaded, typically comes from an <input type="file" />
        const { type: mimeType } = selectedFile;
        const name = selectedFile.name;
        const extension = /([^.]+)(\.(\w+))?$/.exec(name)[3];
        console.log(extension);
        const bucket = awsmobile.aws_user_files_s3_bucket;
        const region = awsmobile.aws_user_files_s3_bucket_region;
        const visibility = 'private';
        const { identityId } = await Auth.currentCredentials();

        const key = `${visibility}/${identityId}/${uuid()}${extension && '.'}${extension}`;

        file = {
          bucket,
          key,
          region,
          mimeType,
          localUri: selectedFile
        };
        console.log("selected file" , file, extension);
      }

      client.mutate({
        mutation: gql(createTodo),
        variables: {
          input: {
            name: 'Upload file',
            description: 'Uses complex objects to upload',
            file: file,
          }
        }
      }).then((result) => {console.log(result)});

    })();
  }
  return (
      <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='file' name='file'  onChange={(e) => handleFileChange(e.target.files)} />
      </header>
    </div>
      </ApolloProvider>
  );
}

export default withAuthenticator(App);