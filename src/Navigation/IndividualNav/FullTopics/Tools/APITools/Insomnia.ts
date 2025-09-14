import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tools/API/Insomnia/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Tools/API/Insomnia/Advanced';

const Insomnia: Subpage = {
    name: 'Insomnia',
    subpages: [
        Basics,
        Advanced
    ],
};

export default Insomnia;