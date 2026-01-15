import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/KoaJS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/KoaJS/Advanced';

const KoaJS: Subpage = {
name: 'Koa.js',
subpages: [
    Basics,
    Advanced
]
};

export default KoaJS;