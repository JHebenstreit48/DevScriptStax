import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const DockerBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/tools/containerization/docker/intro'
        },
        {
          name: 'Installing Docker',
          path: '/tools/containerization/docker/install'
        },
        {
          name: 'CLI Basics',
          path: '/tools/containerization/docker/cli'
        },
        {
          name: 'Containers / Images',
          path: '/tools/containerization/docker/containers-images'
        }
      ]
    },
    {
      name: 'Compose',
      subpages: [
        {
          name: 'Overview',
          path: '/tools/containerization/docker/introduction'
        },
        {
          name: 'Syntax',
          path: '/tools/containerization/docker/syntax'
        },
        {
          name: 'Multi-Container Apps',
          path: '/tools/containerization/docker/multicontainer'
        },
        {
          name: 'Scaling/Load Balancing',
          path: '/tools/containerization/docker/scaling'
        }
      ]
    }
  ]
};

export default DockerBasics;
