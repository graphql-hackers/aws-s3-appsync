// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEndPointOperation = `subscription OnCreateEndPointOperation(
  $id: ID
  $endpoint: AWSURL
  $query_string: String
  $page: String
  $name: String
) {
  onCreateEndPointOperation(
    id: $id
    endpoint: $endpoint
    query_string: $query_string
    page: $page
    name: $name
  ) {
    id
    endpoint
    query_string
    page
    name
    description
  }
}
`;
export const onUpdateEndPointOperation = `subscription OnUpdateEndPointOperation(
  $id: ID
  $endpoint: AWSURL
  $query_string: String
  $page: String
  $name: String
) {
  onUpdateEndPointOperation(
    id: $id
    endpoint: $endpoint
    query_string: $query_string
    page: $page
    name: $name
  ) {
    id
    endpoint
    query_string
    page
    name
    description
  }
}
`;
export const onDeleteEndPointOperation = `subscription OnDeleteEndPointOperation(
  $id: ID
  $endpoint: AWSURL
  $query_string: String
  $page: String
  $name: String
) {
  onDeleteEndPointOperation(
    id: $id
    endpoint: $endpoint
    query_string: $query_string
    page: $page
    name: $name
  ) {
    id
    endpoint
    query_string
    page
    name
    description
  }
}
`;
export const onCreateUser = `subscription OnCreateUser(
  $entity_id: ID
  $name: String
  $email: String
  $organisation: String
) {
  onCreateUser(
    entity_id: $entity_id
    name: $name
    email: $email
    organisation: $organisation
  ) {
    entity_id
    name
    email
    organisation
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser(
  $entity_id: ID
  $name: String
  $email: String
  $organisation: String
) {
  onUpdateUser(
    entity_id: $entity_id
    name: $name
    email: $email
    organisation: $organisation
  ) {
    entity_id
    name
    email
    organisation
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser(
  $entity_id: ID
  $name: String
  $email: String
  $organisation: String
) {
  onDeleteUser(
    entity_id: $entity_id
    name: $name
    email: $email
    organisation: $organisation
  ) {
    entity_id
    name
    email
    organisation
  }
}
`;
export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
    file {
      bucket
      key
      region
    }
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
    file {
      bucket
      key
      region
    }
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
    file {
      bucket
      key
      region
    }
  }
}
`;
