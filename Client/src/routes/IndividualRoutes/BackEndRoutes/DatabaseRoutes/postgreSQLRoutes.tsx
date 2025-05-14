import { RouteObject } from "react-router-dom";

import PostgreSQL from "@/Pages/MainTabs/BackEndPages/DatabasesPages/PostgreSQLPages/PostgreSQL";
// import PostgreSQLCode from "@/pages/PostgreSQLPages/PostgreSQLCode";

const postgreSQLRoutes: RouteObject[] = [
    {
        path: '/postgresql',
        element: <PostgreSQL />,
    },
    // {
    //     path: '/postgresql/postgresqlcode',
    //     element: <PostgreSQLCode />,
    // },
];

export default postgreSQLRoutes;