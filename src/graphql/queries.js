// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEndPointOperation = `query GetEndPointOperation($id: ID!) {
  getEndPointOperation(id: $id) {
    id
    endpoint
    query_string
    page
    name
    description
  }
}
`;
export const listEndPointOperations = `query ListEndPointOperations(
  $filter: TableEndPointOperationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEndPointOperations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      endpoint
      query_string
      page
      name
      description
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($entity_id: ID!) {
  getUser(entity_id: $entity_id) {
    entity_id
    name
    email
    organisation
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      entity_id
      name
      email
      organisation
    }
    nextToken
  }
}
`;
export const getIntrospectionSchema = `query GetIntrospectionSchema($endPoint: String!) {
  getIntrospectionSchema(endPoint: $endPoint)
}
`;
export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
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
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      file {
        bucket
        key
        region
      }
    }
    nextToken
  }
}
`;
