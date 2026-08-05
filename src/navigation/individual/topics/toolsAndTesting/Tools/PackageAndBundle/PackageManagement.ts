import type { Subpage } from '@/types/navigation';

import Yarn from '@/navigation/individual/topics/toolsAndTesting/Tools/PackageAndBundle/PackageManagement/Yarn';
import Pnpm from '@/navigation/individual/topics/toolsAndTesting/Tools/PackageAndBundle/PackageManagement/Pnpm';

const PackageManagement: Subpage = {
    name: 'Package Management',
    subpages: [
        Yarn,
        Pnpm
      ],
};

export default PackageManagement;