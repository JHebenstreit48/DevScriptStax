import { RouteObject } from "react-router-dom";

// ----------------------- JavaScript Basics Start -----------------------

// ------------------------ Introduction Start ------------------------
import JSOverview from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Introduction/JSOverview";
import JSHistory from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Introduction/JSHistory";
// ------------------------- Introduction End -------------------------

// ------------------- Core Language Concepts Start -------------------
import SyntaxStructure from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/SyntaxAndStructure";
import JSVariables from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/Variables";
import Operators from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/Operators";
import BuiltInMethods from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/BuiltInMethods";
import Conditionals from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/Conditionals";
import Loops from "@/Pages/FrontEndPages/JavaScriptPages/Basics/CoreConcepts/Loops";
// -------------------- Core Language Concepts End ----------------------

// -------------------------  Data Types Start --------------------------
import JSPrimitives from "@/Pages/FrontEndPages/JavaScriptPages/Basics/DataTypes/Primitives";
import ComplexDataTypes from "@/Pages/FrontEndPages/JavaScriptPages/Basics/DataTypes/Complex";
import TemplateLiterals from "@/Pages/FrontEndPages/JavaScriptPages/Basics/DataTypes/TemplateLiterals";
// --------------------------- Data Types End ---------------------------

// --------------------------- Arrays Start -----------------------------
import Intro from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Arrays/Intro";
import Methods from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Arrays/Methods";
import Advanced from "@/Pages/FrontEndPages/JavaScriptPages/Basics/Arrays/Advanced";
// ---------------------------- Arrays End ------------------------------

// ------------------------ Objects and JSON Start ------------------------
import ObjectsBasics from "@/Pages/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/Basics";
import PropsAndMethods from "@/Pages/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/PropsAndMethods";
import UtilsAndPatterns from "@/Pages/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/UtilsAndPatterns";
import JSON from "@/Pages/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/JSON";
// ------------------------- Objects and JSON End -------------------------

// ------------------------ Functions Start ------------------------
import FunctionsBasics from "@/Pages/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/Basics";
import ExpressionsIIFE from "@/Pages/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/ExpressionsIIFE";
import ArrowFunctions from "@/Pages/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/Arrow";
import ParamsAndArgs from "@/Pages/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/ParamsAndArgs";
import HigherOrder from "@/Pages/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/HigherOrder";

// ------------------------ JavaScript Basics End ------------------------

const javascriptRoutes: RouteObject[] = [

    // ------------------------ Basics Start ------------------------

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
        path: '/javascript/basics/core/variables',
        element: <JSVariables />,
    },
    {
        path: '/javascript/basics/core/operators',
        element: <Operators />,
    },
    {
        path: '/javascript/basics/core/methods',
        element: <BuiltInMethods />,
    },
    {
        path: '/javascript/basics/core/conditionals',
        element: <Conditionals />,
    },
    {
        path: '/javascript/basics/core/loops',
        element: <Loops />,
    },
    // ------------------- Basics > Core Language Concepts End -------------------

    // ------------------------ Basics > Data Types Start ------------------------
    {
        path: '/javascript/basics/datatypes/primitive',
        element: <JSPrimitives />,
    },
    {
        path: '/javascript/basics/datatypes/complex',
        element: <ComplexDataTypes />,
    },
    {
        path: '/javascript/basics/datatypes/templateliterals',
        element: <TemplateLiterals />,
    },

    // ------------------------ Basics > Arrays Start ------------------------
    {
        path: '/javascript/basics/arrays/intro',
        element: <Intro />,
    },
    {
        path: '/javascript/basics/arrays/methods',
        element: <Methods />,
    },
    {
        path: '/javascript/basics/arrays/advanced',
        element: <Advanced />,
    },
    // ------------------------- Basics > Arrays End -------------------------

    // --------------------- Basics > Objects and JSON Start ---------------------
    {
        path: '/javascript/basics/objects/basics',
        element: <ObjectsBasics />,
    },
    {
        path: '/javascript/basics/objects/propsandmethods',
        element: <PropsAndMethods />,
    },
    {
        path: '/javascript/basics/objects/utilsandpatterns',
        element: <UtilsAndPatterns />,
    },
    {
        path: '/javascript/basics/objects/json',
        element: <JSON />,
    },
    // ---------------------- Basics > Objects and JSON End ----------------------

    // ------------------------ Basics > Functions Start ------------------------
    {
        path: '/javascript/basics/functions/basicsanddeclare',
        element: <FunctionsBasics />,
    },
    {
        path: '/javascript/basics/functions/expressionsandiife',
        element: <ExpressionsIIFE />,
    },
    {
        path: '/javascript/basics/functions/arrow',
        element: <ArrowFunctions />,
    },
    {
        path: '/javascript/basics/functions/paramsandargs',
        element: <ParamsAndArgs />,
    },
    {
        path: '/javascript/basics/functions/higherorder',
        element: <HigherOrder />,
    }
    // ------------------------- Basics > Functions End -------------------------

    // ------------------------ Basics End ------------------------
];

export default javascriptRoutes;