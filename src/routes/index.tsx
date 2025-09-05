import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Special/Error";
import Home from "@/Pages/Special/Home";

import backEnd from "@/routes/FullSections/backEnd";
import cloudServices from "@/routes/FullSections/cloudServices";
import frontEnd from "@/routes/FullSections/frontEnd";
import graphQLAndApollo from "@/routes/FullSections/graphQLAndApollo";
import languages from "@/routes/FullSections/languages";
import testing from "@/routes/FullSections/testing";
import tools from "@/routes/FullSections/tools";

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
            ...backEnd,
            ...cloudServices,
            ...frontEnd,
            ...graphQLAndApollo,
            ...languages,
            ...testing,
            ...tools
        ],
    },
]);    
