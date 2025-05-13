import { RouteObject } from "react-router-dom";

import Python from "@/Pages/ProgrammingLanguagesPages/PythonPages/Python";
// import PythonCode from "@/pages/PythonPages/PythonCode";

const pythonRoutes: RouteObject[] = [
    {
        path: '/python',
        element: <Python />,
    },
    // {
    //     path: '/python/pythoncode',
    //     element: <PythonCode />,
    // },

];

export default pythonRoutes;