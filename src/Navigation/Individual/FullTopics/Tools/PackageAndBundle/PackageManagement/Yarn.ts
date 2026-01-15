import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/PackageAndBundle/PackageManagement/YarnNav/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/PackageAndBundle/PackageManagement/YarnNav/Advanced';

const Yarn: Subpage = {
    name: "Yarn",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Yarn;