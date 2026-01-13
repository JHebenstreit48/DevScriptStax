import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnderstandingPipelines = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Pipelines/UnderstandingPipelines'));
const JenkinsfileBasics = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Pipelines/JenkinsfileBasics'));
const CreatingPipelines = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Pipelines/CreatingPipelines'));
const RunningTestsInJenkins = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Pipelines/RunningTestsInJenkins'));
const DeployingApplications = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Pipelines/DeployingApplications'));
const AutomatingBuildsAndReleases = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Pipelines/AutomatingBuildsAndReleases'));

const Pipelines: RouteObject[] = [
  {
    path: '/tools/cicd/jenkins/basics/pipelines/overview',
    element: <UnderstandingPipelines />,
  },
  {
    path: '/tools/cicd/jenkins/basics/pipelines/jenkinsfile',
    element: <JenkinsfileBasics />,
  },
  {
    path: '/tools/cicd/jenkins/basics/pipelines/create',
    element: <CreatingPipelines />,
  },
  {
    path: '/tools/cicd/jenkins/basics/pipelines/testing',
    element: <RunningTestsInJenkins />,
  },
  {
    path: '/tools/cicd/jenkins/basics/pipelines/deployment',
    element: <DeployingApplications />,
  },
  {
    path: '/tools/cicd/jenkins/basics/pipelines/automation',
    element: <AutomatingBuildsAndReleases />,
  },
];

export default Pipelines;
