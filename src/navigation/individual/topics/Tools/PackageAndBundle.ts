import type { Subpage } from '@/types/navigation';

import PackageManagement from '@/navigation/individual/topics/Tools/PackageAndBundle/PackageManagement';
import Bundling from '@/navigation/individual/topics/Tools/PackageAndBundle/Bundling';

const PackageAndBundle: Subpage = {
    name: 'Package Management & Bundling',
    subpages: [
        PackageManagement,
        Bundling
      ],
};

export default PackageAndBundle;