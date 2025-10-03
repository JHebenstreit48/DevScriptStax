import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const BuildAndRegistry: Subpage = {
  name: 'Build & Registry',
  subpages: [
    {
      name: 'Build Images',
      path: '/docker/basics/build-and-registry/build-images',
    },
    {
      name: 'Push / Pull & Registry',
      path: '/docker/basics/build-and-registry/push-pull-registry',
    },
  ],
};

export default BuildAndRegistry;