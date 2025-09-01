import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const SecurityAndCompliance: Subpage = {
  name: 'Security & Compliance',
  subpages: [
    {
      name: 'Authentication & Roles',
      path: '/databases/mongodb/advanced/security/auth',
    },
    {
      name: 'Auditing & Compliance',
      path: '/databases/mongodb/advanced/security/auditing',
    },
    {
      name: 'Field Level Encryption (CSFLE)',
      path: '/databases/mongodb/advanced/security/csfle',
    },
  ],
};

export default SecurityAndCompliance;