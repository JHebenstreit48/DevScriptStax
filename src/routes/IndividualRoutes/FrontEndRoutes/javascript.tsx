import { RouteObject } from "react-router-dom";

// ----------------------- JavaScript Basics Start -----------------------
import Basics from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/JavaScriptRoutes/Basics";

// ------------------- Core Language Concepts Start -------------------
// -------------------- Core Language Concepts End ----------------------

// -------------------------  Data Types Start --------------------------
import JSPrimitives from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/DataTypes/Primitives";
import ComplexDataTypes from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/DataTypes/Complex";
import TemplateLiterals from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/DataTypes/TemplateLiterals";
// --------------------------- Data Types End ---------------------------

// --------------------------- Arrays Start -----------------------------
import Intro from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/Arrays/Intro";
import Methods from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/Arrays/Methods";
import Advanced from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/Arrays/Advanced";
// ---------------------------- Arrays End ------------------------------

// ------------------------ Objects and JSON Start ------------------------
import ObjectsBasics from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/Basics";
import PropsAndMethods from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/PropsAndMethods";
import UtilsAndPatterns from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/UtilsAndPatterns";
import JSON from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/JSON";
// ------------------------- Objects and JSON End -------------------------

// ------------------------ Functions Start ------------------------
import FunctionsBasics from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/Basics";
import ExpressionsIIFE from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/ExpressionsIIFE";
import ArrowFunctions from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/Arrow";
import ParamsAndArgs from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/ParamsAndArgs";
import HigherOrder from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/HigherOrder";
import ThisKeyword from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/ThisKeyword";
// ------------------------ JavaScript Basics End ------------------------


// ------------------------ JavaScript Intermediate Start ------------------------

// ------------------------ JavaScript Intermediate > DOM and Events Start ------------------------
import EventHandle from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Intermediate/DOMAndEvents/EventHandle";

// ------------------------ JavaScript Intermediate > DOM and Events End ------------------------

// ------------------------ JavaScript Intermediate > Modern ES6 Start ------------------------
import Promises from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Intermediate/ModernES6/Promises";

// ------------------------ JavaScript Intermediate > Modern ES6 End ------------------------

// ------------------------ JavaScript Intermediate End ------------------------

// ------------------------ JavaScript > Advanced Start ------------------------

// ------------------------ Javascript > Advanced > Modules Start ------------------------
import ModulesOverview from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Advanced/ModulesPages/Overview";
import ModulesSyntax from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Advanced/ModulesPages/Syntax";
import DynamicImports from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Advanced/ModulesPages/DynamicImports";
import PathsAliases from "@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Advanced/ModulesPages/PathsAndAliases";

// ------------------------ Javascript > Advanced > Modules End ------------------------

// ------------------------- JavaScript > Advanced End ------------------------

const javascriptRoutes: RouteObject[] = [

    // ------------------------ Basics Start ------------------------

    // ---------------------- Basics > Introduction Start ----------------------
    ...Basics,
    // ----------------------- Basics > Introduction End -----------------------

    // ------------------ Basics > Core Language Concepts Start ------------------
    
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
    // ------------------------- Basics > Data Types End -------------------------

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
    },
    {
        path: '/javascript/basics/functions/thiskeyword',
        element: <ThisKeyword />,
    },
    // ------------------------- Basics > Functions End -------------------------

    // ------------------------ Basics End ------------------------

    // ------------------------ Intermediate Start ------------------------

    // ------------------------ Intermediate > DOM and Events Start ------------------------
    {
        path: '/javascript/intermediate/dom/eventhandling',
        element: <EventHandle />,
    },
    // ------------------------ Intermediate > DOM and Events End ------------------------

    // ------------------------ Intermediate > Modern ES6 Start ------------------------
    {
        path: '/javascript/intermediate/es6/promisesasync',
        element: <Promises />,
    },
// ------------------------- Intermediate > Modern ES6 End ------------------------

    // ------------------------ Intermediate End ------------------------

    // ------------------------ Advanced Start ------------------------

    // ------------------------ Advanced > Modules Start ------------------------
    {
        path: '/javascript/advanced/modules/overview',
        element: <ModulesOverview />,
    },
    {
        path: '/javascript/advanced/modules/syntax',
        element: <ModulesSyntax />,
    },
    {
        path: '/javascript/advanced/modules/dynamic',
        element: <DynamicImports />,
    },
    {
        path: '/javascript/advanced/modules/paths',
        element: <PathsAliases />,
    }
    // ------------------------ Advanced > Modules End ------------------------

    // ------------------------ Advanced End ------------------------
];

export default javascriptRoutes;