import { RouteObject } from "react-router-dom";

import graphQLRoutes from "@/routes/GraphQLAndApollo/graphQLRoutes";
import apolloRoutes from "@/routes/GraphQLAndApollo/apolloRoutes";

const graphqlAndApolloRoutes: RouteObject[] = [
    ...graphQLRoutes,
    ...apolloRoutes,
];

export default graphqlAndApolloRoutes;