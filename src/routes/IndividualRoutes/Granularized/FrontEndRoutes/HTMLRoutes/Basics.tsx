import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// -------------------- HTML Fundamentals Start --------------------
const Introduction = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/Introduction"));
const History = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/History"));
// ---------------------- HTML Fundamentals End --------------------

// ----------------------- HTML Structures Start -------------------
const Attributes = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Attributes"));
const Elements = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Elements"));
// ------------------------ HTML Structures End -------------------

// --------------------- HTML Forms/Semantics Start -----------------
const Forms = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/FormsAndSemantics/Forms"));
const Semantics = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/FormsAndSemantics/Semantics"));
// ----------------------- HTML Forms/Semantics End ------------------

const Basics: RouteObject[] = [

// -------------------- HTML Fundamentals Start --------------------
{
    path: "/html/basics/fundamentals/introduction",
    element: <Introduction />,
},
{
    path: "/html/basics/fundamentals/history",
    element: <History />,
},
// --------------------- HTML Fundamentals End ---------------------


// ----------------------- HTML Structures Start -------------------
{
    path: '/html/basics/structure/elements',
    element: <Elements />,
},
{
    path: '/html/basics/structure/attributes',
    element: <Attributes />,
},
// ------------------------ HTML Structures End --------------------

// --------------------- HTML Forms/Semantics Start -----------------
{
    path: '/html/basics/formssemantics/forms',
    element: <Forms />,
},
{
    path: '/html/basics/formssemantics/semantics',
    element: <Semantics />,
},
// ---------------------- HTML Forms/Semantics End ------------------
];

export default Basics;