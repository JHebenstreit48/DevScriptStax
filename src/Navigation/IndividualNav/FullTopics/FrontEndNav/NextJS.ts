import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import NextJSBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/NextJS/Basics';
import NextJSAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/NextJS/Advanced';

const NextJSNav: Subpage = {
  name: 'Next.js',
  subpages: [
    NextJSBasics,
    NextJSAdvanced
  ]
};

export default NextJSNav;