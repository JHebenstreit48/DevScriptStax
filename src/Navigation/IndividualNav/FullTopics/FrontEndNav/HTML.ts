import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import HTMLBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Basics';
import HTMLIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Intermediate';
import HTMLAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Advanced';

const HTML: Subpage = {
  name: 'HTML',
  subpages: [
    HTMLBasics,
    HTMLIntermediate,
    HTMLAdvanced
  ]
};

export default HTML;