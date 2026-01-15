import type { Subpage } from '@/types/navigation';

const Deployment: Subpage = {
  name: 'Deployment',
  subpages: [
    {
      name: 'Gunicorn',
      path: '/backend/frameworks/django/advanced/deployment/gunicorn',
    },
    {
      name: 'Scaling',
      path: '/backend/frameworks/django/advanced/deployment/scaling',
    },
  ],
};

export default Deployment;