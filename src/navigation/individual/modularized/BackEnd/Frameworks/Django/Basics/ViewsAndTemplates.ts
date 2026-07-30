import type { Subpage } from '@/types/navigation';

const ViewsAndTemplates: Subpage = {
  name: 'Views & Templates',
  subpages: [
    {
      name: 'Views',
      path: '/frameworks/django/basics/views-templates/views',
    },
    {
      name: 'Template Engine',
      path: '/frameworks/django/basics/views-templates/templates',
    },
    {
      name: 'Class vs Function',
      path: '/frameworks/django/basics/views-templates/class-vs-function',
    },
    {
      name: 'Rendering Context',
      path: '/frameworks/django/basics/views-templates/rendering-context',
    },
  ],
};

export default ViewsAndTemplates;