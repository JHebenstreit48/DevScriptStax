import type { Subpage } from '@/types/navigation';

import Yarn from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/PackageManagement/Yarn';
import Pnpm from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/PackageManagement/Pnpm';

const PackageManagement: Subpage = {
    name: 'Package Management',
    subpages: [
        Yarn,
        Pnpm
      ],
};

export default PackageManagement;