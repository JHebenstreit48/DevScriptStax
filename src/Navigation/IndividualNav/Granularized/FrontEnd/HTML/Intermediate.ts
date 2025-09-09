import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import MediaAndEmbeds from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Intermediate/MediaAndEmbeds';
import TabularData from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Intermediate/TabularData';
import HeadAndMeta from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Intermediate/HeadAndMeta';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    MediaAndEmbeds,
    TabularData,
    HeadAndMeta
  ]
};

export default Intermediate;