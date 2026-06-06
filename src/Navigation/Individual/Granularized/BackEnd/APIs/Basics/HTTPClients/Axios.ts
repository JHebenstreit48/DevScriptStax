import type { Subpage } from '@/types/navigation';

const Axios: Subpage = {
  name: 'Axios',
  subpages: [
    {
      name: 'Introduction',
      path: '/apis/basics/http-clients/axios/introduction'
    },
    {
      name: 'HTTP Methods',
      path: '/apis/basics/http-clients/axios/http-methods'
    },
    {
      name: 'Error Handling',
      path: '/apis/basics/http-clients/axios/error-handling'
    },
    {
      name: 'Interceptors',
      path: '/apis/basics/http-clients/axios/interceptors'
    },
    {
      name: 'Configuration',
      path: '/apis/basics/http-clients/axios/configuration'
    }
  ]
};

export default Axios;