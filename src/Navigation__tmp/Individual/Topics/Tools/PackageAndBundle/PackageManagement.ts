import type { Subpage } from '@/types/navigation';

import Yarn from '@/Navigation/Individual/Topics/Tools/PackageAndBundle/PackageManagement/Yarn';
import Pnpm from '@/Navigation/Individual/Topics/Tools/PackageAndBundle/PackageManagement/Pnpm';

const PackageManagement: Subpage = {
    name: 'Package Management',
    subpages: [
        Yarn,
        Pnpm
      ],
};

export default PackageManagement;