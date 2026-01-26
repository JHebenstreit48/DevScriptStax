import type { Subpage } from '@/types/navigation';

import PackageManagement from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/PackageManagement';
import Bundling from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/Bundling';

const PackageAndBundle: Subpage = {
    name: 'Package Management & Bundling',
    subpages: [
        PackageManagement,
        Bundling
      ],
};

export default PackageAndBundle;