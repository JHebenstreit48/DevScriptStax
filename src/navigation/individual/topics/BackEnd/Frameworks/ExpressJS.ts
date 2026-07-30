import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Frameworks/ExpressJS/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Frameworks/ExpressJS/Advanced';

const ExpressJS: Subpage = {
name: 'Express.js',
subpages: [
    Basics,
    Advanced
]
};

export default ExpressJS;