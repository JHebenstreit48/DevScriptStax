import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/HTML/Images/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/HTML/Images/Advanced';

const Images: Subpage = {
    name: 'Images',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Images;