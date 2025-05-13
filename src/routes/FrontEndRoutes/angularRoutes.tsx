import { RouteObject } from "react-router-dom";

// ---------------------- Angular Basics Start ----------------------

// ----------- Angular Getting Started Start ------------
import AngularIntro from "@/Pages/FrontEndPages/AngularPages/Basics/Fundamentals/Introduction";
import AngularAppCreate from "@/Pages/FrontEndPages/AngularPages/Basics/Fundamentals/CreatingRunningApp";
import AngularCLI from "@/Pages/FrontEndPages/AngularPages/Basics/Fundamentals/CLI";
// ------------ Angular Getting Started End -------------

// ----------- Angular Project Structure Start -----------
import AngularStructure from "@/Pages/FrontEndPages/AngularPages/Basics/ProjectStructure/Structure";
import AngularConfigFiles from "@/Pages/FrontEndPages/AngularPages/Basics/ProjectStructure/ConfigurationFiles";
import AngularFolderFileNaming from "@/Pages/FrontEndPages/AngularPages/Basics/ProjectStructure/FolderFileNaming";
// ------------ Angular Project Structure End ------------

// ----------------------- Angular Basics End ------------------------

// -------------- Angular Core Concepts Start --------------
import AngularComponentsIntro from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/Introduction";
import AngularIO from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/InputsOutputs";
import AngularCommunicate from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/Communication";
import AngularReusable from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/ReusableDesign";
import AngularSmartDumb from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularComponents/SmartDumb";
// --------------- Angular Core Concepts End ---------------


const angularRoutes: RouteObject[] = [

    // --------------- Angular Basics > Getting Started Start ---------------
    {
        path: '/angular/basics/fundamentals/intro',
        element: <AngularIntro />,
    },
    {
        path: '/angular/basics/fundamentals/creatingrunning',
        element: <AngularAppCreate />,
    },
    {
        path: '/angular/basics/fundamentals/angularcli',
        element: <AngularCLI />,
    },
    // ---------------- Angular Basics > Getting Started End ----------------

    // ------------- Angular Basics > Project Structure Start --------------
    {
        path: '/angular/basics/projectstructure/folderfilestructure',
        element: <AngularStructure />,
    },
    {
        path: '/angular/basics/projectstructure/configfiles',
        element: <AngularConfigFiles />,
    },
    {
        path: '/angular/basics/projectstructure/namingconventions',
        element: <AngularFolderFileNaming />,
    },
    // -------------- Angular Basics > Project Structure End ---------------

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