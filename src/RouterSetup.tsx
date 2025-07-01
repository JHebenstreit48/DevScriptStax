import { useEffect, useState } from "react";
import { useRoutes, RouteObject } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Special/Error";
import Home from "@/Pages/Special/Home";

import backEndRoutes from "@/routes/FullSections/backEnd";
import cloudServicesRoutes from "@/routes/FullSections/cloudServices";
import graphqlAndApolloRoutes from "@/routes/FullSections/graphqlAndApollo";
import languagesRoutes from "@/routes/FullSections/languages";
import testingRoutes from "@/routes/FullSections/testing";
import toolRoutes from "@/routes/FullSections/tools";

import frontEndRoutes from "@/routes/FullSections/frontEnd";

const RouterSetup = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([]); // ✅ Add type here

  useEffect(() => {
    const combinedRoutes: RouteObject[] = [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          ...backEndRoutes,
          ...cloudServicesRoutes,
          ...graphqlAndApolloRoutes,
          ...languagesRoutes,
          ...testingRoutes,
          ...toolRoutes,
          ...frontEndRoutes, // ✅ direct use — no .then needed
        ],
      },
    ];
  
    setRoutes(combinedRoutes);
  }, []);

  const routing = useRoutes(routes);
  return routing ?? null;
};

export default RouterSetup;
