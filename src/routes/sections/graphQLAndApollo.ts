import { RouteObject } from "react-router-dom";

import GraphQL from '@/routes/individual/topics/BackEnd/GraphQLAndApollo/graphQL';
import Apollo from '@/routes/individual/topics/BackEnd/GraphQLAndApollo/apollo';

const graphQLAndApollo: RouteObject[] = [
  ...GraphQL,
  ...Apollo,
];

export default graphQLAndApollo;
