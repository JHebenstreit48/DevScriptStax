import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GlobalAndMultiRegion: Subpage = {
  name: 'Global & Multi-Region',
  subpages: [
    {
      name: 'Zones & Tag-Aware Sharding',
      path: '/mongodb/advanced/global/zones',
    },
    {
      name: 'DR & Cross-Region Strategy',
      path: '/mongodb/advanced/global/dr-strategy',
    },
  ],
};

export default GlobalAndMultiRegion;