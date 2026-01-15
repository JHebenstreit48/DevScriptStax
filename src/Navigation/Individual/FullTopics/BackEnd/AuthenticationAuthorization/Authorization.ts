import type { Subpage } from '@/types/navigation';

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