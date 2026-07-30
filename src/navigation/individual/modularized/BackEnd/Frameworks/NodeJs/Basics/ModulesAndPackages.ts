import type { Subpage } from '@/types/navigation';

const ModulesAndPackages: Subpage = {
  name: 'Modules & Packages',
  subpages: [
    {
      name: 'CommonJS vs ESM',
      path: '/frameworks/nodejs/basics/modules-packages/commonjs-vs-esm',
    },
    {
      name: 'package.json & Scripts',
      path: '/frameworks/nodejs/basics/modules-packages/package-json-scripts',
    },
    {
      name: 'Lockfiles (npm)',
      path: '/frameworks/nodejs/basics/modules-packages/lockfiles-npm',
    },
    {
      name: 'node_modules & Resolution',
      path: '/frameworks/nodejs/basics/modules-packages/node-modules-resolution',
    },
  ],
};

export default ModulesAndPackages;