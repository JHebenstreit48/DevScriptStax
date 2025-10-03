import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import GatsbyBasics from '@/Navigation/Individual/Granularized/FrontEnd/Gatsby/Basics';
import GatsbyAdvanced from '@/Navigation/Individual/Granularized/FrontEnd/Gatsby/Advanced';

const Gatsby: Subpage = {
name : 'Gatsby',
subpages: [
    GatsbyBasics,
    GatsbyAdvanced
  ]
};

export default Gatsby;
