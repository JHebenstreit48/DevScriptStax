import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const PublicVsPrivate = lazy(() => import("@/Pages/MainTabs/BackEnd/APIs/Basics/TypesOfAPIs/PubVSPrivate"));

const TypesOfAPIs: RouteObject[] = [
    {
        path: '/apis/basics/types/public-vs-private',
        element: <PublicVsPrivate />
    }
];

export default TypesOfAPIs;