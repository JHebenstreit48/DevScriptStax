import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Overview',
      path: '/backend/frameworks/django/basics/fundamentals/overview',
    },
    {
      name: 'Django vs Other Frameworks',
      path: '/backend/frameworks/django/basics/fundamentals/comparison',
    },
    {
      name: 'Install & Setup',
      path: '/backend/frameworks/django/basics/fundamentals/install-setup',
    },
    {
      name: 'Project Structure',
      path: '/backend/frameworks/django/basics/fundamentals/project-structure',
    },
  ],
};

export default Fundamentals;