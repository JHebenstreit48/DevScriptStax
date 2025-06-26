import { RouteObject } from "react-router-dom";

// ----------------------- HTML Basics Start -----------------------

import HTML from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/Introduction";
import HTMLELements from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Elements";
import HTMLAttributes from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Attributes";
import HTMLForms from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/FormsAndSemantics/Forms";
import HTMLSemantics from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/FormsAndSemantics/Semantics";

const htmlRoutes: RouteObject[] = [


    {
        path: '/html/basics/fundamentals/introduction',
        element: <HTML />,
    },
    {
        path: '/html/basics/structure/elements',
        element: <HTMLELements />,
    },
    {
        path: '/html/basics/structure/attributes',
        element: <HTMLAttributes />,
    },
    {
        path: '/html/basics/formssemantics/forms',
        element: <HTMLForms />,
    },
    {
        path: '/html/basics/formssemantics/semantic',
        element: <HTMLSemantics />,
    },
    
    // ------------------------ HTML Basics End ------------------------

];

export default htmlRoutes;