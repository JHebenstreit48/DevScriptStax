import { RouteObject } from "react-router-dom";

import MongoDBIntro from "@/Pages/MainTabs/BackEndPages/DatabasesPages/MongoDB/Basics/Fundamentals/Introduction";

const mongoDBRoutes: RouteObject[] = [
    {
        path: '/databases/mongodb/intro/Introduction',
        element: <MongoDBIntro />,
    },
];

export default mongoDBRoutes;