import { RouteObject } from "react-router-dom";

import graphQLRoutes from "@/routes/IndividualRoutes/GraphQLAndApollo/graphQLRoutes";
import apolloRoutes from "@/routes/IndividualRoutes/GraphQLAndApollo/apolloRoutes";

const graphqlAndApolloRoutes: RouteObject[] = [
    ...graphQLRoutes,
    ...apolloRoutes,
];

export default graphqlAndApolloRoutes;