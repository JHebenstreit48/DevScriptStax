import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/AuthenticationAuthorization/Authorization/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/AuthenticationAuthorization/Authorization/Advanced';

const Authorization: Subpage = {
    name: 'Authorization',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Authorization;