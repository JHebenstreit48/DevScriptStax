import { RouteObject } from "react-router-dom";

// ---------- API Introduction Start ----------
import CoreConcepts from "@/Pages/BackEndPages/APIPages/APIFundamentals/CoreAPIConcepts";
// ---------- API Introduction End ----------

// ---------- Types of APIs Start ----------
import PublicVPrivate from "@/Pages/BackEndPages/APIPages/TypesOfAPIs/PubVSPrivate";
import RESTVSGraphQLVSSOAP from "@/Pages/BackEndPages/APIPages/TypesOfAPIs/RestVSGraphVSSOAP";
// ---------- Types of APIs End ----------

const APIBasics: RouteObject[] = [

{
    path: '/apis/intro/fundamentals/overview',
    element: <CoreConcepts />,
},
{
    path: '/apis/intro/types/publicvsprivate',
    element: <PublicVPrivate />,
},
{
    path: '/apis/intro/types/comparison',
    element: <RESTVSGraphQLVSSOAP />,
},
];

export default APIBasics;