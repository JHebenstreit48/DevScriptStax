import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Tools/API/Postman/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Tools/API/Postman/Advanced';

const Postman: Subpage = {
    name: 'Postman',
    subpages: [
        Basics,
        Advanced
    ],
};

export default Postman;