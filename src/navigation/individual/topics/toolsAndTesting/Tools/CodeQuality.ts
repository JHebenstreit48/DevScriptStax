import type { Subpage } from '@/types/navigation';

import ESLint from '@/navigation/individual/topics/toolsAndTesting/Tools/CodeQuality/ESLint';
import Prettier from '@/navigation/individual/topics/toolsAndTesting/Tools/CodeQuality/Prettier';
import TSLint from '@/navigation/individual/topics/toolsAndTesting/Tools/CodeQuality/TSLint';
import StandardJS from '@/navigation/individual/topics/toolsAndTesting/Tools/CodeQuality/StandardJS';

const CodeQuality: Subpage = {
    name: 'Code Quality',
    subpages: [
        ESLint,
        Prettier,
        TSLint,
        StandardJS
    ]
};

export default CodeQuality;