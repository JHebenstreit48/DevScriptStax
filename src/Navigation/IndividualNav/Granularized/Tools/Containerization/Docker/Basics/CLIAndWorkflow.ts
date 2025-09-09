import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const CLIAndWorkflow: Subpage = {
  name: 'CLI & Workflow',
  subpages: [
    {
      name: 'CLI Basics',
      path: '/docker/basics/cli-and-workflow/cli',
    },
    {
      name: 'Containers & Images',
      path: '/docker/basics/cli-and-workflow/containers-and-images',
    },
  ],
};

export default CLIAndWorkflow;