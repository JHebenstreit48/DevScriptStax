import { RouteObject } from 'react-router-dom';

import TypeScript from "@/Pages/ProgrammingLanguagesPages/TypeScriptPages/TypeScript";
// import TypeScriptCode from "@/pages/TypeScriptPages/TypeScriptCode";

const typescriptRoutes: RouteObject[] = [
    {
        path: '/typescript',
        element: <TypeScript />,
    },
    // {
    //     path: '/typescript/typescriptcode',
    //     element: <TypeScriptCode />,
    // },
];

export default typescriptRoutes;