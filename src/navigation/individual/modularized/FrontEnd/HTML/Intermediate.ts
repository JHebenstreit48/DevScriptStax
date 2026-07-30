import type { Subpage } from '@/types/navigation';

import MediaAndEmbeds from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Intermediate/MediaAndEmbeds';
import TabularData from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Intermediate/TabularData';
import HeadAndMeta from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Intermediate/HeadAndMeta';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    MediaAndEmbeds,
    TabularData,
    HeadAndMeta
  ]
};

export default Intermediate;