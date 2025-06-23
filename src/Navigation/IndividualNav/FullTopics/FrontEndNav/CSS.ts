import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import CSSVanilla from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Vanilla';  
import CSSFrameworks from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Frameworks';
import CSSPreprocessors from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Preprocessors';
import CSSPostprocessors from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Postprocessors';

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
