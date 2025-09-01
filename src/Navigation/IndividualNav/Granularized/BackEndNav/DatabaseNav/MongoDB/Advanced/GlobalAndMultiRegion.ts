import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GlobalAndMultiRegion: Subpage = {
  name: 'Global & Multi-Region',
  subpages: [
    {
      name: 'Zones & Tag-Aware Sharding',
      path: '/databases/mongodb/advanced/global/zones',
    },
    {
      name: 'DR & Cross-Region Strategy',
      path: '/databases/mongodb/advanced/global/dr-strategy',
    },
  ],
};

export default GlobalAndMultiRegion;