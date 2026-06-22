import type { Subpage } from '@/types/navigation';

import Cypress from '@/Navigation/Individual/Topics/Testing/End2End/Cypress';
import Playwright from '@/Navigation/Individual/Topics/Testing/End2End/Playwright';

const Databases: Subpage = {
    name: 'Databases',
    subpages: [
        Cypress,
        Playwright
    ]
};

export default Databases;