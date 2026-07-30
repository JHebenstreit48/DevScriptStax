import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/AuthenticationAuthorization/Authentication/Advanced';

const Authentication: Subpage = {
    name: 'Authentication',
    subpages: [
        Basics,
        Intermediate,
        Advanced
    ]
};

export default Authentication;