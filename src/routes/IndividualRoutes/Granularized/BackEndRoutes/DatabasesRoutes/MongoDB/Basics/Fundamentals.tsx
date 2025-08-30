import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import('@/Pages/MainTabs/BackEndPages/DatabasesPages/MongoDB/Basics/Fundamentals/Introduction')
);
const NoSQLvsSQL = lazy(
  () =>
    import('@/Pages/MainTabs/BackEndPages/DatabasesPages/MongoDB/Basics/Fundamentals/NOSQLVsSQL')
);
const Setup = lazy(
  () =>
    import('@/Pages/MainTabs/BackEndPages/DatabasesPages/MongoDB/Basics/Fundamentals/Setup')
);
const UseCases = lazy(
  () =>
    import('@/Pages/MainTabs/BackEndPages/DatabasesPages/MongoDB/Basics/Fundamentals/UseCases')
);

const Fundamentals: RouteObject[] = [
    {
        path: '/databases/mongodb/basics/fundamentals/introduction',
        element: <Introduction />,
    },
    {
        path: '/databases/mongodb/basics/fundamentals/nosql-vs-sql',
        element: <NoSQLvsSQL />,
    },
    {
        path: '/databases/mongodb/basics/fundamentals/setup',
        element: <Setup />,
    },
    {
        path: '/databases/mongodb/basics/fundamentals/use-cases',
        element: <UseCases />,
    }
];

export default Fundamentals;