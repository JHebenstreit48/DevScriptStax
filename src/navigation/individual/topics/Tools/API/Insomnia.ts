import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/API/Insomnia/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/API/Insomnia/Advanced';

const Insomnia: Subpage = {
    name: 'Insomnia',
    subpages: [
        Basics,
        Advanced
    ],
};

export default Insomnia;