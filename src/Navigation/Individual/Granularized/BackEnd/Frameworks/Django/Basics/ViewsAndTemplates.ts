import type { Subpage } from '@/types/navigation';

const ViewsAndTemplates: Subpage = {
  name: 'Views & Templates',
  subpages: [
    {
      name: 'Views',
      path: '/backend/frameworks/django/basics/views-templates/views',
    },
    {
      name: 'Template Engine',
      path: '/backend/frameworks/django/basics/views-templates/templates',
    },
    {
      name: 'Class vs Function',
      path: '/backend/frameworks/django/basics/views-templates/class-vs-function',
    },
    {
      name: 'Rendering Context',
      path: '/backend/frameworks/django/basics/views-templates/rendering-context',
    },
  ],
};

export default ViewsAndTemplates;