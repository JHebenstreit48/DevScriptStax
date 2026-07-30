import type { Subpage } from '@/types/navigation';

import Cypress from '@/navigation/individual/topics/Testing/End2End/Cypress';
import Playwright from '@/navigation/individual/topics/Testing/End2End/Playwright';

const End2End: Subpage = {
    name: 'End To End',
    subpages: [
        Cypress,
        Playwright
    ]
};

export default End2End;