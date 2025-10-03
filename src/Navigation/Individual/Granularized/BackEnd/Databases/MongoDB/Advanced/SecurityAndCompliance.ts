import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const SecurityAndCompliance: Subpage = {
  name: 'Security & Compliance',
  subpages: [
    {
      name: 'Authentication & Roles',
      path: '/mongodb/advanced/security/auth',
    },
    {
      name: 'Auditing & Compliance',
      path: '/mongodb/advanced/security/auditing',
    },
    {
      name: 'Field Level Encryption (CSFLE)',
      path: '/mongodb/advanced/security/csfle',
    },
  ],
};

export default SecurityAndCompliance;