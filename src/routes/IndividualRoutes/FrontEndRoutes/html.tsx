import { RouteObject } from "react-router-dom";

// ----------------------- HTML Basics Start -----------------------

// -------------------- HTML Fundamentals Start --------------------
import HTMLIntro from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/Introduction";
import HTMLHistory from "@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/History";
// ---------------------- HTML Fundamentals End --------------------

// ------------------------ HTML Basics End ------------------------

const htmlRoutes: RouteObject[] = [

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



// ------------------------ HTML Basics End ------------------------

];

export default htmlRoutes;