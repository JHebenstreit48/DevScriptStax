import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const EventHandling = lazy(() => import("@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Intermediate/DOMAndEvents/EventHandle"));

const DOMAndEvents: RouteObject[] = [
{
    path: "/javascript/intermediate/dom/eventhandling",
    element: <EventHandling />
}
];

export default DOMAndEvents;