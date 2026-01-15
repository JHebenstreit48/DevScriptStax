import type { Subpage } from '@/types/navigation';

const RESTInDjango: Subpage = {
  name: 'REST in Django',
  subpages: [
    {
      name: 'Intro to DRF',
      path: '/backend/frameworks/django/advanced/rest-in-django/intro',
    },
    {
      name: 'Serializers',
      path: '/backend/frameworks/django/advanced/rest-in-django/serializers',
    },
    {
      name: 'Viewsets & Routers',
      path: '/backend/frameworks/django/advanced/rest-in-django/viewsets-routers',
    },
    {
      name: 'Auth & Permissions',
      path: '/backend/frameworks/django/advanced/rest-in-django/auth-permissions',
    },
  ],
};

export default RESTInDjango;