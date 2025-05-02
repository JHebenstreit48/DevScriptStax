import { RouteObject } from "react-router-dom";

import GraphQL from "@/Pages/GraphQLAndApolloPages/GraphQLPages/GraphQL";
// import GraphQLCode from "@/pages/GraphQLPages/GraphQLCode";

const graphQLRoutes: RouteObject[] = [

{
    path: '/graphql',
    element: <GraphQL />,
},
// {
//     path: '/graphql/graphqlcode',
//     element: <GraphQLCode />,
// },
];

export default graphQLRoutes;