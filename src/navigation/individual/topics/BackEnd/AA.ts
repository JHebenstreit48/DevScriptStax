import type { Subpage } from '@/types/navigation';

import Authentication from '@/navigation/individual/topics/BackEnd/AuthenticationAuthorization/Authentication';
import Authorization from '@/navigation/individual/topics/BackEnd/AuthenticationAuthorization/Authorization';

const AuthenticationAuthorization: Subpage = {
    name: 'Authentication & Authorization',
    subpages: [
        Authentication,
        Authorization
    ]
};

export default AuthenticationAuthorization;