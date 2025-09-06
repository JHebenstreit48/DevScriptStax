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
const BSONAndObject = lazy(
  () =>
    import('@/Pages/MainTabs/BackEndPages/DatabasesPages/MongoDB/Basics/Fundamentals/BSONAndObject')
);
const DataModeling = lazy(
  () =>
    import('@/Pages/MainTabs/BackEndPages/DatabasesPages/MongoDB/Basics/Fundamentals/DataModeling')
);

const Fundamentals: RouteObject[] = [
    {
        path: '/mongodb/basics/fundamentals/introduction',
        element: <Introduction />,
    },
    {
        path: '/mongodb/basics/fundamentals/nosql-vs-sql',
        element: <NoSQLvsSQL />,
    },
    {
        path: '/mongodb/basics/fundamentals/setup',
        element: <Setup />,
    },
    {
        path: '/mongodb/basics/fundamentals/use-cases',
        element: <UseCases />,
    },
    {
      path: '/mongodb/basics/fundamentals/bson-objectid',
      element: <BSONAndObject />
    },
    {
      path: '/mongodb/basics/fundamentals/data-modeling',
      element: <DataModeling />
    },
];

export default Fundamentals;