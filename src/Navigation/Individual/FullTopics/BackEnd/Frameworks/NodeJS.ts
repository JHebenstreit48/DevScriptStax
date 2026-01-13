import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Node/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Node/Advanced';

const NodeJS: Subpage = {
name: 'Node.js',
subpages: [
    Basics,
    Advanced
]
};

export default NodeJS;