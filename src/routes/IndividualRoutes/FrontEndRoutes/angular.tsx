import { RouteObject } from "react-router-dom";

// -------------- Angular Core Concepts Start --------------
import AngularComponentsIntro from "@/Pages/MainTabs/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/Introduction";
import AngularIO from "@/Pages/MainTabs/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/InputsOutputs";
import AngularCommunicate from "@/Pages/MainTabs/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/Communication";
import AngularReusable from "@/Pages/MainTabs/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/ReusableDesign";
import AngularSmartDumb from "@/Pages/MainTabs/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/SmartDumb";
// --------------- Angular Core Concepts End ---------------


const angularRoutes: RouteObject[] = [

    // ------------------ Angular Core Concepts Start ------------------
    {
        path: '/angular/coreconcepts/components/intro',
        element: <AngularComponentsIntro />,
    },
    {
        path: '/angular/coreconcepts/components/reusable-design',
        element: <AngularReusable />,
    },
    {
        path: '/angular/coreconcepts/components/smart-dumb',
        element: <AngularSmartDumb />,
    },
    {
        path: '/angular/coreconcepts/components/communication',
        element: <AngularCommunicate />,
    },
    {
        path: '/angular/coreconcepts/components/inputsoutputs',
        element: <AngularIO />,
    }
    // ------------------- Angular Core Concepts End -------------------

];

export default angularRoutes;