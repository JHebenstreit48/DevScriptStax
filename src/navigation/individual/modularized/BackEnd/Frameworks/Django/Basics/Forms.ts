import type { Subpage } from '@/types/navigation';

const Forms: Subpage = {
  name: 'Forms',
  subpages: [
    {
      name: 'Working with Forms',
      path: '/frameworks/django/basics/forms/working',
    },
    {
      name: 'Model Forms',
      path: '/frameworks/django/basics/forms/model-forms',
    },
    {
      name: 'Validation & Errors',
      path: '/frameworks/django/basics/forms/validation-errors',
    },
    {
      name: 'File Uploads',
      path: '/frameworks/django/basics/forms/file-uploads',
    },
  ],
};

export default Forms;