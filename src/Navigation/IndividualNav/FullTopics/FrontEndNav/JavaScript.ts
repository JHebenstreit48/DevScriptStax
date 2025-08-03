import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import JSBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics';
import JSIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Intermediate';
import JSAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced';
import JSBestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Security';

const JavaScript: Subpage = {
  name: 'JavaScript',
  subpages: [
    JSBasics,
    JSIntermediate,
    JSAdvanced,
    JSBestPractices
  ]
};

export default JavaScript;