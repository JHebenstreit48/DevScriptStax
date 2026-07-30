import type { Subpage } from '@/types/navigation';

const Tooling: Subpage = {
  name: 'Tooling',
  subpages: [
    {
      name: 'npm & npx',
      path: '/frameworks/nodejs/basics/tooling/npm-npx',
    },
    {
      name: 'Node Versions (nvm)',
      path: '/frameworks/nodejs/basics/tooling/nvm-versions',
    },
  ],
};

export default Tooling;