import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Structure = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Basics/ProjectStructure/Structure'));
const CypressCLIAndConfiguration = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Basics/ProjectStructure/CypressCLIAndConfiguration'));
const TestFilePatterns = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Basics/ProjectStructure/TestFilePatterns'));
const FixturesAndPlugins = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Basics/ProjectStructure/FixturesAndPlugins'));

const ProjectStructure: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/basics/project-structure/structure',
    element: <Structure />,
  },
  {
    path: '/testing/e2e/cypress/basics/project-structure/cli-config',
    element: <CypressCLIAndConfiguration />,
  },
  {
    path: '/testing/e2e/cypress/basics/project-structure/file-patterns',
    element: <TestFilePatterns />,
  },
  {
    path: '/testing/e2e/cypress/basics/project-structure/fixtures-plugins',
    element: <FixturesAndPlugins />,
  },
];

export default ProjectStructure;
