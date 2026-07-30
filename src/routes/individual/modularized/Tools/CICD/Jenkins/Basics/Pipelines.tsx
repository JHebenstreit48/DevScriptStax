import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnderstandingPipelines = lazy(() => import('@/pages/mainTabs/Tools/CICD/Jenkins/Basics/Pipelines/UnderstandingPipelines'));
const JenkinsfileBasics = lazy(() => import('@/pages/mainTabs/Tools/CICD/Jenkins/Basics/Pipelines/JenkinsfileBasics'));
const CreatingPipelines = lazy(() => import('@/pages/mainTabs/Tools/CICD/Jenkins/Basics/Pipelines/CreatingPipelines'));
const RunningTestsInJenkins = lazy(() => import('@/pages/mainTabs/Tools/CICD/Jenkins/Basics/Pipelines/RunningTestsInJenkins'));
const DeployingApplications = lazy(() => import('@/pages/mainTabs/Tools/CICD/Jenkins/Basics/Pipelines/DeployingApplications'));
const AutomatingBuildsAndReleases = lazy(() => import('@/pages/mainTabs/Tools/CICD/Jenkins/Basics/Pipelines/AutomatingBuildsAndReleases'));

const Pipelines: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/basics/pipelines/overview',
    element: <UnderstandingPipelines />,
  },
  {
    path: '/ci-cd/jenkins/basics/pipelines/jenkinsfile',
    element: <JenkinsfileBasics />,
  },
  {
    path: '/ci-cd/jenkins/basics/pipelines/create',
    element: <CreatingPipelines />,
  },
  {
    path: '/ci-cd/jenkins/basics/pipelines/testing',
    element: <RunningTestsInJenkins />,
  },
  {
    path: '/ci-cd/jenkins/basics/pipelines/deployment',
    element: <DeployingApplications />,
  },
  {
    path: '/ci-cd/jenkins/basics/pipelines/automation',
    element: <AutomatingBuildsAndReleases />,
  },
];

export default Pipelines;
