import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Advanced';

const Authentication: Subpage = {
    name: 'Authentication',
    subpages: [
        Basics,
        Intermediate,
        Advanced
    ]
};

export default Authentication;