import { RouteObject } from "react-router-dom";

import GraphQL from "@/routes/Individual/FullRoutes/GraphQLAndApollo/graphQL";
import Apollo from "@/routes/Individual/FullRoutes/GraphQLAndApollo/apollo";

const graphQLAndApollo: RouteObject[] = [
  ...GraphQL,
  ...Apollo,
];

export default graphQLAndApollo;
