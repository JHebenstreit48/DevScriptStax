import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProjectStructure = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/ProjectStructure/ProjectStructure'));
const CypressCLIAndConfiguration = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/ProjectStructure/CypressCLIAndConfiguration'));
const TestFilePatterns = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/ProjectStructure/TestFilePatterns'));
const FixturesAndPlugins = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/ProjectStructure/FixturesAndPlugins'));

const ProjectStructure: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/project-structure',
    element: <ProjectStructure />,
  },
  {
    path: '/testing/e2e/cypress/cli-config',
    element: <CypressCLIAndConfiguration />,
  },
  {
    path: '/testing/e2e/cypress/file-patterns',
    element: <TestFilePatterns />,
  },
  {
    path: '/testing/e2e/cypress/fixtures-plugins',
    element: <FixturesAndPlugins />,
  },
];

export default ProjectStructure;
