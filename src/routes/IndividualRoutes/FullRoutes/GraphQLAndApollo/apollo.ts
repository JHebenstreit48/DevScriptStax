import { RouteObject } from "react-router-dom";

import ServerBasics from "@/routes/IndividualRoutes/Granularized/GraphQLAndApollo/ApolloRoutes/ApolloServer/Basics";

const Apollo: RouteObject[] = [
    // Apollo Server Start
    ...ServerBasics,

    // Apollo Server End

    // Apollo Client Start

    // Apollo Client End
];

export default Apollo;