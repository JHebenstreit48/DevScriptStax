import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const DockerAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Topics',
      subpages: [
        {
          name: 'Networking',
          path: '/tools/containerization/docker/networking'
        },
        {
          name: 'Volumes/Persistence',
          path: '/tools/containerization/docker/volumes'
        },
        {
          name: 'Security',
          path: '/tools/containerization/docker/security'
        },
        {
          name: 'Image Optimization',
          path: '/tools/containerization/docker/image-optimization'
        }
      ]
    }
  ]
};

export default DockerAdvanced;
