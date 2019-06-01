// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEndPointOperation = `mutation CreateEndPointOperation($input: CreateEndPointOperationInput!) {
  createEndPointOperation(input: $input) {
    id
    endpoint
    query_string
    page
    name
    description
  }
}
`;
export const updateEndPointOperation = `mutation UpdateEndPointOperation($input: UpdateEndPointOperationInput!) {
  updateEndPointOperation(input: $input) {
    id
    endpoint
    query_string
    page
    name
    description
  }
}
`;
export const deleteEndPointOperation = `mutation DeleteEndPointOperation($input: DeleteEndPointOperationInput!) {
  deleteEndPointOperation(input: $input) {
    id
    endpoint
    query_string
    page
    name
    description
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    entity_id
    name
    email
    organisation
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    entity_id
    name
    email
    organisation
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    entity_id
    name
    email
    organisation
  }
}
`;
export const executeGraphqlOperation = `mutation ExecuteGraphqlOperation(
  $endPoint: String!
  $query: String!
  $operation: String
) {
  executeGraphqlOperation(
    endPoint: $endPoint
    query: $query
    operation: $operation
  )
}
`;
export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
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
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
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
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
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
