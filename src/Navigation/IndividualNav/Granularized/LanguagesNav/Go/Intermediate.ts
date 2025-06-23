import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GoIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'HTTP APIs',
      path: '/go/intermediate/httpapis'
    },
    {
      name: 'Routing Libraries',
      path: '/go/intermediate/routing'
    },
    {
      name: 'Middleware',
      path: '/go/intermediate/middleware'
    },
    {
      name: 'JSON Handling',
      path: '/go/intermediate/json'
    },
    {
      name: 'Database Integration',
      path: '/go/intermediate/database'
    },
    {
      name: 'Env Configuration',
      path: '/go/intermediate/envconfig'
    }
  ]
};

export default GoIntermediate;
