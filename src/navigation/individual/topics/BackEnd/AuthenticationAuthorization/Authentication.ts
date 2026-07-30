import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/AuthenticationAuthorization/Authentication/Basics';
import Intermediate from '@/navigation/individual/modularized/BackEnd/AuthenticationAuthorization/Authentication/Intermediate';
import Advanced from '@/navigation/individual/modularized/BackEnd/AuthenticationAuthorization/Authentication/Advanced';

const Authentication: Subpage = {
    name: 'Authentication',
    subpages: [
        Basics,
        Intermediate,
        Advanced
    ]
};

export default Authentication;