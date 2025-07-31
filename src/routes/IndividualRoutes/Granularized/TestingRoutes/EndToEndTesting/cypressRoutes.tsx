import { RouteObject } from 'react-router-dom';

import CypressIntro from "@/Pages/MainTabs/TestingPages/CypressPages/Basics/Fundamentals/Introduction";
import CypressSetup from '@/Pages/MainTabs/TestingPages/CypressPages/Basics/Fundamentals/Setup';

import TestBlock from '@/Pages/MainTabs/TestingPages/CypressPages/Basics/SyntaxAndStructure/TestBlock';

import VisitGet from '@/Pages/MainTabs/TestingPages/CypressPages/Basics/CoreCommands/VisitGet';

const cypressRoutes: RouteObject[] = [
    // ------------------ Cypress Basics > Fundamentals Start ------------------
    {
        path: '/testing/e2e/cypress/intro',
        element: <CypressIntro />,
    },
    {
        path: '/testing/e2e/cypress/setup',
        element: <CypressSetup />,
    },

    // ------------------ Cypress Basics > Fundamentals End ------------------

    // ------------------- Cypress Basics > Syntax & Structure Start -------------------
    {
        path: '/testing/e2e/cypress/syntax/testblocks',
        element: <TestBlock />,
    },
    // ------------------- Cypress Basics > Syntax & Structure End -------------------

    // ---------------------- Cypress Basics > Core Commands Start ----------------
    {
        path: '/testing/e2e/cypress/commands/visitget',
        element: <VisitGet />,
    }
];

export default cypressRoutes;