import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RbenvRVMAndGems = lazy(() => import('@/pages/mainTabs/Languages/Ruby/Basics/ProjectSetup/RbenvRVMAndGems'));
const BundlerAndGemfile = lazy(() => import('@/pages/mainTabs/Languages/Ruby/Basics/ProjectSetup/BundlerAndGemfile'));

const ProjectSetup: RouteObject[] = [
  {
    path: '/languages/ruby/basics/project-setup/rbenv-rvm-gems',
    element: <RbenvRVMAndGems />,
  },
  {
    path: '/languages/ruby/basics/project-setup/bundler-gemfile',
    element: <BundlerAndGemfile />,
  },
];

export default ProjectSetup;
