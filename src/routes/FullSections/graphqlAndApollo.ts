import { RouteObject } from "react-router-dom";

import graphQLRoutes from "@/routes/IndividualRoutes/Granularized/GraphQLAndApollo/graphQLRoutes";
import apolloRoutes from "@/routes/IndividualRoutes/Granularized/GraphQLAndApollo/apolloRoutes";

const graphqlAndApolloRoutes: RouteObject[] = [
    ...graphQLRoutes,
    ...apolloRoutes,
];

export default graphqlAndApolloRoutes;