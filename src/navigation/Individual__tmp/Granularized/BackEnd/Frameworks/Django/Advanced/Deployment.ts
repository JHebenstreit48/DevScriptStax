import type { Subpage } from '@/types/navigation';

const Deployment: Subpage = {
  name: 'Deployment',
  subpages: [
    {
      name: 'Gunicorn',
      path: '/frameworks/django/advanced/deployment/gunicorn',
    },
    {
      name: 'Scaling',
      path: '/frameworks/django/advanced/deployment/scaling',
    },
  ],
};

export default Deployment;