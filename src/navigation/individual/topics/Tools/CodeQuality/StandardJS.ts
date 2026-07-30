import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/CodeQuality/StandardJS/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/CodeQuality/StandardJS/Advanced';

const StandardJS: Subpage = {
    name: 'StandardJS',
    subpages: [
        Basics,
        Advanced
    ]
};

export default StandardJS;