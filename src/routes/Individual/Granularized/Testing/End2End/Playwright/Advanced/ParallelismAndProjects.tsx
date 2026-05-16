import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ParallelExecution = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Advanced/ParallelismAndProjects/ParallelExecution'));
const ProjectsAndShards = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Advanced/ParallelismAndProjects/ProjectsAndShards'));

const ParallelismAndProjects: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/advanced/parallelism-projects/parallel-execution',
    element: <ParallelExecution />,
  },
  {
    path: '/testing/e2e/playwright/advanced/parallelism-projects/projects-shards',
    element: <ProjectsAndShards />,
  },
];

export default ParallelismAndProjects;
