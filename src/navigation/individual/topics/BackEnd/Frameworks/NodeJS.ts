import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Frameworks/NodeJs/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Frameworks/NodeJs/Advanced';

const NodeJS: Subpage = {
name: 'Node.js',
subpages: [
    Basics,
    Advanced
]
};

export default NodeJS;