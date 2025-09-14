import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEnd/AuthenticationAuthorization/Authorization/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEnd/AuthenticationAuthorization/Authorization/Advanced';

const Authorization: Subpage = {
    name: 'Authorization',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Authorization;