import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/API/Postman/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/API/Postman/Advanced';

const Postman: Subpage = {
    name: 'Postman',
    subpages: [
        Basics,
        Advanced
    ],
};

export default Postman;