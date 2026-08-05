import type { Subpage } from '@/types/navigation';

const Workflow: Subpage = {
  name: 'Workflow',
  subpages: [
    {
      name: 'Full Workflow',
      path: '/git/basics/workflow/full-workflow',
    },
    {
      name: 'Nuances',
      path: '/git/basics/workflow/nuances',
    },
  ],
};

export default Workflow;