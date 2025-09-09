import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

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