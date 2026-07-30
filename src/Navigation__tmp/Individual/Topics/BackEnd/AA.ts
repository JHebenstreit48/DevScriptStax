import type { Subpage } from '@/types/navigation';

import Authentication from '@/Navigation/Individual/Topics/BackEnd/AuthenticationAuthorization/Authentication';
import Authorization from '@/Navigation/Individual/Topics/BackEnd/AuthenticationAuthorization/Authorization';

const AuthenticationAuthorization: Subpage = {
    name: 'Authentication & Authorization',
    subpages: [
        Authentication,
        Authorization
    ]
};

export default AuthenticationAuthorization;