import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/CodeQuality/ESLint/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/CodeQuality/ESLint/Advanced';

const ESLint: Subpage = {
    name: 'ESLint',
    subpages: [
        Basics,
        Advanced
    ]
};

export default ESLint;