import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import(
      "@/Pages/MainTabs/GraphQLAndApolloPages/ApolloPages/ApolloServer/Introduction"
    )
);

const Basics: RouteObject[] = [
{
    path: '/graphqlandapollo/apollo/apolloserver/basics/introduction',
    element: <Introduction />
}
];

export default Basics;