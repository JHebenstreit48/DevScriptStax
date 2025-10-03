import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/AuthenticationAuthorization/Authorization/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/AuthenticationAuthorization/Authorization/Advanced';

const Authorization: Subpage = {
    name: 'Authorization',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Authorization;