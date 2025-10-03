import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

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