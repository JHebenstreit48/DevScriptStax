import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/ErrorHomeSplash/Error";
import Home from "@/Pages/ErrorHomeSplash/Home";

import backEndRoutes from "@/routes/RoutesDirectories/backEndRoutesCombined";
import frontEndRoutes from "@/routes/RoutesDirectories/frontEndRoutes";
import graphqlAndApolloRoutes from "@/routes/RoutesDirectories/graphqlAndApolloRoutes";
import programmingLanguagesRoutes from "@/routes/RoutesDirectories/programmingLanguagesRoutes";
import testingRoutes from "@/routes/RoutesDirectories/testingRoutesCombined";
import toolRoutes from "@/routes/RoutesDirectories/toolsRoutesCombined";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            ...backEndRoutes,
            ...frontEndRoutes,
            ...graphqlAndApolloRoutes,
            ...programmingLanguagesRoutes,
            ...testingRoutes,
            ...toolRoutes,
        ],
    },
]);    
