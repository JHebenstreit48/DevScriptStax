import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Tools/PackageAndBundle/PackageManagement/Pnpm/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Tools/PackageAndBundle/PackageManagement/Pnpm/Advanced';

const Pnpm: Subpage = {
    name: 'Pnpm',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Pnpm;