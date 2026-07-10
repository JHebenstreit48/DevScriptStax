import type { Subpage } from '@/types/navigation';

const ViewsAndStatic: Subpage = {
  name: 'Views & Static',
  subpages: [
    {
      name: 'Static Files',
      path: '/frameworks/express/basics/views-static/static-files',
    },
    {
      name: 'EJS',
      path: '/frameworks/express/basics/views-static/ejs',
    },
    {
      name: 'Handlebars',
      path: '/frameworks/express/basics/views-static/handlebars',
    },
  ],
};

export default ViewsAndStatic;