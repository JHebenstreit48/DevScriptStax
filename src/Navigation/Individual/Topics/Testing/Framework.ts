import type { Subpage } from '@/types/navigation';

import Jest from '@/Navigation/Individual/Topics/Testing/Framework/Jest';
import Vitest from '@/Navigation/Individual/Topics/Testing/Framework/Vitest';
import Mocha from '@/Navigation/Individual/Topics/Testing/Framework/Mocha';

const Framework: Subpage = {
    name: 'Framework',
    subpages: [
        Jest,
        Vitest,
        Mocha
    ]
};

export default Framework;