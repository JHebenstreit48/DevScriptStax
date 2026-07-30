import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Frameworks/KoaJS/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Frameworks/KoaJS/Advanced';

const KoaJS: Subpage = {
name: 'Koa.js',
subpages: [
    Basics,
    Advanced
]
};

export default KoaJS;