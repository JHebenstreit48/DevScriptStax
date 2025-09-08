import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/APITools/Insomnia/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/APITools/Insomnia/Advanced';

const Insomnia: Subpage = {
    name: 'Insomnia',
    subpages: [
        Basics,
        Advanced
    ],
};

export default Insomnia;