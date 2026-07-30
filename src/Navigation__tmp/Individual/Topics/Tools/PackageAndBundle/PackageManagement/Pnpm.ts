import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/PackageAndBundle/PackageManagement/Pnpm/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/PackageAndBundle/PackageManagement/Pnpm/Advanced';

const Pnpm: Subpage = {
    name: 'Pnpm',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Pnpm;