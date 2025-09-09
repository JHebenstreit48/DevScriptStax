import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import NextJSBasics from '@/Navigation/IndividualNav/Granularized/FrontEnd/NextJS/Basics';
import NextJSAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/NextJS/Advanced';

const NextJS: Subpage = {
  name: 'Next.js',
  subpages: [
    NextJSBasics,
    NextJSAdvanced
  ]
};

export default NextJS;