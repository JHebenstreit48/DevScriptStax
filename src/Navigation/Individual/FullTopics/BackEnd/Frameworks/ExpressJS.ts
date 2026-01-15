import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/ExpressJS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/ExpressJS/Advanced';

const ExpressJS: Subpage = {
name: 'Express.js',
subpages: [
    Basics,
    Advanced
]
};

export default ExpressJS;