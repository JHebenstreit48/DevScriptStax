import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Overview',
      path: '/frameworks/django/basics/fundamentals/overview',
    },
    {
      name: 'Django vs Other Frameworks',
      path: '/frameworks/django/basics/fundamentals/comparison',
    },
    {
      name: 'Install & Setup',
      path: '/frameworks/django/basics/fundamentals/install-setup',
    },
    {
      name: 'Project Structure',
      path: '/frameworks/django/basics/fundamentals/project-structure',
    },
  ],
};

export default Fundamentals;