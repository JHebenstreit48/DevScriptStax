import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/API/Insomnia/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/API/Insomnia/Advanced';

const Insomnia: Subpage = {
    name: 'Insomnia',
    subpages: [
        Basics,
        Advanced
    ],
};

export default Insomnia;