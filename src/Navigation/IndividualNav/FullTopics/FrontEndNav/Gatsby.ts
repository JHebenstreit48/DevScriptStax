import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GatsbyBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/Gatsby/Basics';
import GatsbyAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/Gatsby/Advanced';

const GatsbyNav: Subpage = {
name : 'Gatsby',
subpages: [
    GatsbyBasics,
    GatsbyAdvanced
  ]
};

export default GatsbyNav;
