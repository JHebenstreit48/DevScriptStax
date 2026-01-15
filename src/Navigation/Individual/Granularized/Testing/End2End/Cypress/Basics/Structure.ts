import type { Subpage } from '@/types/navigation';

const Structure: Subpage = {
  name: 'Project Structure',
  subpages: [
    {
      name: 'Project Structure',
      path: '/testing/e2e/cypress/project-structure',
    },
    {
      name: 'Cypress CLI & Configuration',
      path: '/testing/e2e/cypress/cli-config',
    },
    {
      name: 'Test File Patterns',
      path: '/testing/e2e/cypress/file-patterns',
    },
    // {
    //   name: 'Environment Variables',
    //   path: '/testing/e2e/cypress/environments',
    // },
    {
      name: 'Fixtures & Plugins',
      path: '/testing/e2e/cypress/fixtures-plugins',
    },
  ],
};

export default Structure;