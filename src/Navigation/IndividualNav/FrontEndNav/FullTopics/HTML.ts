import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import HTMLBasics from '@/Navigation/IndividualNav/FrontEndNav/Granularized/HTMLNav/Basics';
import HTMLIntermediate from '@/Navigation/IndividualNav/FrontEndNav/Granularized/HTMLNav/Intermediate';
import HTMLAdvanced from '@/Navigation/IndividualNav/FrontEndNav/Granularized/HTMLNav/Advanced';
import HTMLBestPractices from '@/Navigation/IndividualNav/FrontEndNav/Granularized/HTMLNav/BestPractices';

const HTMLNav: Subpage = {
  name: 'HTML',
  subpages: [
    HTMLBasics,
    HTMLIntermediate,
    HTMLAdvanced,
    HTMLBestPractices
  ]
};

export default HTMLNav;