import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tests/End2End/CypressNav/Basics';

const Cypress: Subpage = {
    name: 'Cypress',
    subpages: [
        Basics,
    ]
};

export default Cypress;