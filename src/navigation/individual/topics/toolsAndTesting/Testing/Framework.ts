import type { Subpage } from '@/types/navigation';

import Jest from '@/navigation/individual/topics/toolsAndTesting/Testing/Framework/Jest';
import Vitest from '@/navigation/individual/topics/toolsAndTesting/Testing/Framework/Vitest';
import Mocha from '@/navigation/individual/topics/toolsAndTesting/Testing/Framework/Mocha';

const Framework: Subpage = {
    name: 'Framework',
    subpages: [
        Jest,
        Vitest,
        Mocha
    ]
};

export default Framework;