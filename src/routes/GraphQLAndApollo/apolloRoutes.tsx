import { RouteObject } from "react-router-dom";

import ApolloServer from "@/Pages/GraphQLAndApolloPages/ApolloServerPages/ApolloServer";
// import ApolloServerCode from "@/pages/ApolloServerPages/ApolloServerCode";

const apolloRoutes: RouteObject[] = [

{
    path: '/apolloserver',
    element: <ApolloServer />,
},
// {
//     path: '/apolloserver/apolloservercode',
//     element: <ApolloServerCode />,
// },
];

export default apolloRoutes;