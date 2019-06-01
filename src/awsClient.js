import awsMobile from './aws-exports';
import AWSAppSyncClient from 'aws-appsync';
import {Auth} from 'aws-amplify';

const client = new AWSAppSyncClient({
    url: awsMobile.aws_appsync_graphqlEndpoint,
    region: awsMobile.aws_appsync_region,
    auth: {
        type: awsMobile.aws_appsync_authenticationType,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
    disableOffline: true,
    complexObjectsCredentials: () => Auth.currentCredentials()
});

export default client;