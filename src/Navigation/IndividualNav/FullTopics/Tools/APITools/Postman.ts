import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/APITools/Postman/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/APITools/Postman/Advanced';

const Postman: Subpage = {
    name: 'Postman',
    subpages: [
        Basics,
        Advanced
    ],
};

export default Postman;