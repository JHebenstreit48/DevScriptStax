import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/PackageAndBundle/PackageManagement/Pnpm/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/PackageAndBundle/PackageManagement/Pnpm/Advanced';

const Pnpm: Subpage = {
    name: 'Pnpm',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Pnpm;