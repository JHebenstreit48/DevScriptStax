import type { Subpage } from '@/types/navigation';

import ESLint from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/ESLint';
import Prettier from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/Prettier';
import TSLint from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/TSLint';
import StandardJS from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/StandardJS';

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