import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GatsbyBasics from '@/Navigation/IndividualNav/Granularized/FrontEnd/Gatsby/Basics';
import GatsbyAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/Gatsby/Advanced';

const Gatsby: Subpage = {
name : 'Gatsby',
subpages: [
    GatsbyBasics,
    GatsbyAdvanced
  ]
};

export default Gatsby;
