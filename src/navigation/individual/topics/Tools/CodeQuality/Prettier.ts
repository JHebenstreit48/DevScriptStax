import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/CodeQuality/Prettier/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/CodeQuality/Prettier/Advanced';

const Prettier: Subpage = {
    name: 'Prettier',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Prettier;