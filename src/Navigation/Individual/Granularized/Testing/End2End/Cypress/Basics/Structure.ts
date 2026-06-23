import type { Subpage } from '@/types/navigation';

const Structure: Subpage = {
  name: 'Project Structure',
  subpages: [
    {
      name: 'Structure',
      path: '/e2e/cypress/basics/project-structure/structure',
    },
    {
      name: 'Cypress CLI & Configuration',
      path: '/e2e/cypress/basics/project-structure/cli-config',
    },
    {
      name: 'Test File Patterns',
      path: '/e2e/cypress/basics/project-structure/file-patterns',
    },
    {
      name: 'Fixtures & Plugins',
      path: '/e2e/cypress/basics/project-structure/fixtures-plugins',
    },
  ],
};

export default Structure;