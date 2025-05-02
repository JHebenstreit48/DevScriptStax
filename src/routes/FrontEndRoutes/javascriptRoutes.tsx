import { RouteObject } from "react-router-dom";

// ----------------------- JavaScript Basics Start -----------------------

// ------------------------ Introduction Start ------------------------
import JSOverview from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Introduction/JSOverview";
import JSHistory from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Introduction/JSHistory";
// ------------------------- Introduction End -------------------------

// ------------------- Core Language Concepts Start -------------------
import SyntaxStructure from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/SyntaxAndStructure";
import DataTypes from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/DataTypes";
import JSVariables from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/Variables";
import Operators from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/Operators";
// -------------------- Core Language Concepts End --------------------

// --------------------------- Arrays Start ---------------------------
import ArraysIntro from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Arrays/ArrayIntro";
// ---------------------------- Arrays End ----------------------------

// ------------------------ JavaScript Basics End ------------------------

const javascriptRoutes: RouteObject[] = [
    // ========================================================
    //                   JavaScript Notes Start
    // ========================================================

    // ---------------------- Basics > Introduction Start ----------------------
    {
        path: '/javascript/basics/intro/overview',
        element: <JSOverview />,
    },
    {
        path: '/javascript/basics/intro/history',
        element: <JSHistory />,
    },
    // ----------------------- Basics > Introduction End -----------------------

    // ------------------ Basics > Core Language Concepts Start ------------------
    {
        path: '/javascript/basics/core/syntax',
        element: <SyntaxStructure />,
    },
    {
        path: '/javascript/basics/core/datatypes',
        element: <DataTypes />,
    },
    {
        path: '/javascript/basics/core/variables',
        element: <JSVariables />,
    },
    {
        path: '/javascript/basics/core/operators',
        element: <Operators />,
    },
    // ------------------- Basics > Core Language Concepts End -------------------

    // ------------------------ Basics > Arrays Start ------------------------
    {
        path: '/javascript/basics/arrays/intro',
        element: <ArraysIntro />,
    },
    // ------------------------- Basics > Arrays End -------------------------
];

export default javascriptRoutes;