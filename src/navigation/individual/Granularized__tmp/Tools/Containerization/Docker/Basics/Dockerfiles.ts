import type { Subpage } from '@/types/navigation';

const Dockerfiles: Subpage = {
  name: 'Dockerfiles',
  subpages: [
    {
      name: 'Basics',
      path: '/docker/basics/dockerfile/basics',
    },
    {
      name: '.dockerignore',
      path: '/docker/basics/dockerfile/dockerignore',
    },
  ],
};

export default Dockerfiles;