import type { Subpage } from '@/types/navigation';

import Bootstrap from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Combined/Bootstrap';
import ReactBootstrap from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Combined/ReactBootstrap';
import Tailwind from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Combined/Tailwind';

const Frameworks: Subpage = {
    name: "Frameworks",
    subpages: [
        Bootstrap,
        ReactBootstrap,
        Tailwind
    ]
};

export default Frameworks;