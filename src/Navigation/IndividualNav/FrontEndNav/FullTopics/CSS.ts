import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import CSSVanilla from '@/Navigation/IndividualNav/FrontEndNav/Granularized/CSSNav/Vanilla';
import CSSFrameworks from '@/Navigation/IndividualNav/FrontEndNav/Granularized/CSSNav/Frameworks';
import CSSPreprocessors from '@/Navigation/IndividualNav/FrontEndNav/Granularized/CSSNav/Preprocessors';
import CSSPostprocessors from '@/Navigation/IndividualNav/FrontEndNav/Granularized/CSSNav/Postprocessors';

const CSSNav: Subpage = {
  name: 'CSS',
  subpages: [
    CSSVanilla,
    CSSFrameworks,
    CSSPreprocessors,
    CSSPostprocessors
  ]
};

export default CSSNav;
