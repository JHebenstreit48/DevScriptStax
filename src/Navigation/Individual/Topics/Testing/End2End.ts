import type { Subpage } from '@/types/navigation';

import Cypress from '@/Navigation/Individual/Topics/Testing/End2End/Cypress';
import Playwright from '@/Navigation/Individual/Topics/Testing/End2End/Playwright';

const End2End: Subpage = {
    name: 'End To End',
    subpages: [
        Cypress,
        Playwright
    ]
};

export default End2End;