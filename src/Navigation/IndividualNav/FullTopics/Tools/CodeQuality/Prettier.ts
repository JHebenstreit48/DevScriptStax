import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/CodeQuality/Prettier/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/CodeQuality/Prettier/Advanced';

const Prettier: Subpage = {
    name: 'Prettier',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Prettier;