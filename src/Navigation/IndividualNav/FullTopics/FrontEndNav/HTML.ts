import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import HTMLBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Basics';
import HTMLIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Intermediate';
import HTMLAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Advanced';
import HTMLBestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/BestPractices';

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