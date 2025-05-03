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
import Components from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularComponents";
import Modules from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularModules";
import Services from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularServices";
import Routing from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularRouting";
// --------------- Angular Core Concepts End ---------------

// ========================================================
//                     Angular Notes End
// ========================================================


const angularRoutes: RouteObject[] = [

    // ========================================================
    //                    Angular Notes Start
    // ========================================================

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
        path: '/angular/coreconcepts/components',
        element: <Components />,
    },
    {
        path: '/angular/coreconcepts/modules',
        element: <Modules />,
    },
    {
        path: '/angular/coreconcepts/services',
        element: <Services />,
    },
    {
        path: '/angular/coreconcepts/routing',
        element: <Routing />,
    },
    // ------------------- Angular Core Concepts End -------------------

    // ========================================================
    //                     Angular Notes End
    // ========================================================

];

export default angularRoutes;