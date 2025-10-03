import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/CodeQuality/StandardJS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/CodeQuality/StandardJS/Advanced';

const StandardJS: Subpage = {
    name: 'StandardJS',
    subpages: [
        Basics,
        Advanced
    ]
};

export default StandardJS;