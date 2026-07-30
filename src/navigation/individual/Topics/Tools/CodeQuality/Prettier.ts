import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/CodeQuality/Prettier/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/CodeQuality/Prettier/Advanced';

const Prettier: Subpage = {
    name: 'Prettier',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Prettier;