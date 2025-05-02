import { RouteObject } from "react-router-dom";

import MongoDB from "@/Pages/BackEndPages/DatabasesPages/MongoDBPages/MongoDB";
// import MongoDBCode from "@/pages/MongoDBPages/MongoDBCode";

const mongoDBRoutes: RouteObject[] = [
    {
        path: '/mongodb',
        element: <MongoDB />,
    },
    // {
    //     path: '/mongodb/mongodbcode',
    //     element: <MongoDBCode />,
    // },
];

export default mongoDBRoutes;