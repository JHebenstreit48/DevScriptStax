import type { Subpage } from '@/types/navigation';

import Chrome from '@/Navigation/Individual/Topics/Tools/DevTools/Chrome';

const DevTools: Subpage = {
    name: 'DevTools',
    subpages: [
        Chrome,
    ]
};

export default DevTools;