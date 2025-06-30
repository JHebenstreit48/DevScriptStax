import { RouteObject } from "react-router-dom";

// ----------------------- HTML Basics Start -----------------------

// -------------------- HTML Fundamentals Start --------------------
import HTMLIntro from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/Introduction";
import HTMLHistory from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/History";
// ---------------------- HTML Fundamentals End --------------------

// ----------------------- HTML Structures Start -------------------
import Attributes from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Attributes";
import Elements from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Elements";
// ------------------------ HTML Structures End -------------------

// --------------------- HTML Forms/Semantics Start -----------------
import Forms from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/FormsAndSemantics/Forms";
import Semantics from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/FormsAndSemantics/Semantics";
// ----------------------- HTML Forms/Semantics End ------------------

// ------------------------ HTML Basics End ------------------------

const htmlBasics: RouteObject[] = [

// ----------------------- HTML Basics Start -----------------------

// -------------------- HTML Fundamentals Start --------------------
{
    path: "/html/basics/fundamentals/introduction",
    element: <HTMLIntro />,
},
{
    path: "/html/basics/fundamentals/history",
    element: <HTMLHistory />,
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

// ------------------------ HTML Basics End ------------------------

];

export default htmlBasics;