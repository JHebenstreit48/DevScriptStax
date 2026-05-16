import type { Subpage } from '@/types/navigation';

const Structure: Subpage = {
  name: 'Project Structure',
  subpages: [
    {
      name: 'Structure',
      path: '/testing/e2e/cypress/basics/project-structure/structure',
    },
    {
      name: 'Cypress CLI & Configuration',
      path: '/testing/e2e/cypress/basics/project-structure/cli-config',
    },
    {
      name: 'Test File Patterns',
      path: '/testing/e2e/cypress/basics/project-structure/file-patterns',
    },
    // {
    //   name: 'Environment Variables',
    //   path: '/testing/e2e/cypress/environments',
    // },
    {
      name: 'Fixtures & Plugins',
      path: '/testing/e2e/cypress/basics/project-structure/fixtures-plugins',
    },
  ],
};

export default Structure;