import { RouteObject } from 'react-router-dom';

// ========================================================
//                          Git Notes Start
// ========================================================

import GitWorkflow from '@/Pages/MainTabs/ToolsPages/Containerization/GitPages/Basics/Workflow/FullWorkflow';
import GitNuances from '@/Pages/MainTabs/ToolsPages/Containerization/GitPages/Basics/Workflow/Nuances';

// ========================================================
//                           Git Notes End
// ========================================================

const gitRoutes: RouteObject[] = [
  {
    path: '/tools/containerization/git/basics/workflow/fullworkflow',
    element: <GitWorkflow />
  },
  {
    path: '/tools/containerization/git/basics/workflow/nuances',
    element: <GitNuances />
  }
];

export default gitRoutes;
