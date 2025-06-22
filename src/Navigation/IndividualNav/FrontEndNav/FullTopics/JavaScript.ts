import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import JSBasics from '@/Navigation/IndividualNav/FrontEndNav/Granularized/JavaScriptNav/Basics';
import JSIntermediate from '@/Navigation/IndividualNav/FrontEndNav/Granularized/JavaScriptNav/Intermediate';
import JSAdvanced from '@/Navigation/IndividualNav/FrontEndNav/Granularized/JavaScriptNav/Advanced';
import JSBestPractices from '@/Navigation/IndividualNav/FrontEndNav/Granularized/JavaScriptNav/BestPractices';

const JavaScriptNav: Subpage = {
  name: 'JavaScript',
  subpages: [
    JSBasics,
    JSIntermediate,
    JSAdvanced,
    JSBestPractices
  ]
};

export default JavaScriptNav;