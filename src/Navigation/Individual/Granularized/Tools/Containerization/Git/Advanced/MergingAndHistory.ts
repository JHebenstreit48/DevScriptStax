import type { Subpage } from '@/types/navigation';

const MergingAndHistory: Subpage = {
  name: 'Merging & History',
  subpages: [
    {
      name: 'Merging & Conflict Resolution',
      path: '/git/advanced/merging/conflicts',
    },
    {
      name: 'Rebase vs Merge',
      path: '/git/advanced/merging/rebase-vs-merge',
    },
    {
      name: 'Cherry-Pick and Revert',
      path: '/git/advanced/history/cherry-revert',
    },
  ],
};

export default MergingAndHistory;