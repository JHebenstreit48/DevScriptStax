import type { Subpage } from '@/types/navigation';

const RemotePlatforms: Subpage = {
  name: 'Remote Platforms',
  subpages: [
    {
      name: 'GitHub',
      path: '/git/advanced/remote-platforms/github',
    },
    {
      name: 'GitLab',
      path: '/git/advanced/remote-platforms/gitlab',
    },
    {
      name: 'GitHub & GitLab - CI/CD',
      path: '/git/advanced/remote-platforms/cicd',
    },
  ],
};

export default RemotePlatforms;