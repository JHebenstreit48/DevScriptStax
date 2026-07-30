import type { Subpage } from '@/types/navigation';

import MediaAndEmbeds from '@/navigation/individual/modularized/FrontEnd/HTML/Intermediate/MediaAndEmbeds';
import TabularData from '@/navigation/individual/modularized/FrontEnd/HTML/Intermediate/TabularData';
import HeadAndMeta from '@/navigation/individual/modularized/FrontEnd/HTML/Intermediate/HeadAndMeta';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    MediaAndEmbeds,
    TabularData,
    HeadAndMeta
  ]
};

export default Intermediate;