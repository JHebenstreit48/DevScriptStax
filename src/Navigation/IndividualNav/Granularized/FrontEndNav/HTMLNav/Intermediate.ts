import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const HTMLIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Media & Embeds',
      subpages: [
        {
          name: 'Media Elements',
          path: '/html/intermediate/mediaembeds/media'
        },
        {
          name: 'Embedding Content',
          path: '/html/intermediate/mediaembeds/embedding'
        }
      ]
    },
    {
      name: 'Tabular Data',
      subpages: [
        {
          name: 'HTML Tables',
          path: '/html/intermediate/tabulardata/tables'
        },
        {
          name: 'Captions & Groups',
          path: '/html/intermediate/tabulardata/captions'
        }
      ]
    },
    {
      name: 'Head/Metadata',
      subpages: [
        {
          name: 'Head Elements',
          path: '/html/intermediate/headmetadata/head'
        },
        {
          name: 'Meta Tags',
          path: '/html/intermediate/headmetadata/meta'
        }
      ]
    }
  ]
};

export default HTMLIntermediate;
