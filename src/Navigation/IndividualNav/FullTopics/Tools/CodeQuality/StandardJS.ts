import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/CodeQuality/StandardJS/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/CodeQuality/StandardJS/Advanced';

const StandardJS: Subpage = {
    name: 'StandardJS',
    subpages: [
        Basics,
        Advanced
    ]
};

export default StandardJS;