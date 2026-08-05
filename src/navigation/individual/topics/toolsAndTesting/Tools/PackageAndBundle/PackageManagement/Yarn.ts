import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Tools/PackageAndBundle/PackageManagement/Yarn/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Tools/PackageAndBundle/PackageManagement/Yarn/Advanced';

const Yarn: Subpage = {
    name: "Yarn",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Yarn;