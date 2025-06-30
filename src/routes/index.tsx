import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Special/Error";
import Home from "@/Pages/Special/Home";

import backEndRoutes from "@/routes/FullSections/backEndRoutes";
import cloudServicesRoutes from "@/routes/FullSections/cloudServices";
import frontEndRoutes from "@/routes/FullSections/frontEnd";
import graphqlAndApolloRoutes from "@/routes/FullSections/graphqlAndApollo";
import languagesRoutes from "@/routes/FullSections/languages";
import testingRoutes from "@/routes/FullSections/testing";
import toolRoutes from "@/routes/FullSections/tools";

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
            ...cloudServicesRoutes,
            ...frontEndRoutes,
            ...graphqlAndApolloRoutes,
            ...languagesRoutes,
            ...testingRoutes,
            ...toolRoutes
        ],
    },
]);    
