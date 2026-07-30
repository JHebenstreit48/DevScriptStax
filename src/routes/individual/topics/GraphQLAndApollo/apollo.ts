import { RouteObject } from "react-router-dom";

import ServerBasics from '@/routes/individual/modularized/GraphQLAndApollo/Apollo/ApolloServer/Basics';
import ServerAdvanced from '@/routes/individual/modularized/GraphQLAndApollo/Apollo/ApolloServer/Advanced';

const Apollo: RouteObject[] = [
    // Apollo Server Start
    ...ServerBasics,
    ...ServerAdvanced,
    // Apollo Server End

    // Apollo Client Start

    // Apollo Client End
];

export default Apollo;