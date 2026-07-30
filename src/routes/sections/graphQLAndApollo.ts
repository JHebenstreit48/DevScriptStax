import { RouteObject } from "react-router-dom";

import GraphQL from '@/routes/individual/topics/GraphQLAndApollo/graphQL';
import Apollo from '@/routes/individual/topics/GraphQLAndApollo/apollo';

const graphQLAndApollo: RouteObject[] = [
  ...GraphQL,
  ...Apollo,
];

export default graphQLAndApollo;
