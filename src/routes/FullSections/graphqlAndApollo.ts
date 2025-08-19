import { RouteObject } from "react-router-dom";

import GraphQL from "@/routes/IndividualRoutes/Granularized/GraphQLAndApollo/graphQLRoutes";
import Apollo from "@/routes/IndividualRoutes/Granularized/GraphQLAndApollo/apolloRoutes";

const graphqlAndApolloRoutes: RouteObject[] = [
    ...GraphQL,
    ...Apollo,
];

export default graphqlAndApolloRoutes;