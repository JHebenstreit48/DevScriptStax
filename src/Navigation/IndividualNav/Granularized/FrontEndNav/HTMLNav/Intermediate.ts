import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import MediaAndEmbeds from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Intermediate/MediaAndEmbeds';
import TabularData from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Intermediate/TabularData';
import HeadAndMeta from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Intermediate/HeadAndMeta';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    MediaAndEmbeds,
    TabularData,
    HeadAndMeta
  ]
};

export default Intermediate;