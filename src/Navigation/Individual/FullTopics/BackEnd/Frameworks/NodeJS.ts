import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/NodeJs/Advanced';

const NodeJS: Subpage = {
name: 'Node.js',
subpages: [
    Basics,
    Advanced
]
};

export default NodeJS;