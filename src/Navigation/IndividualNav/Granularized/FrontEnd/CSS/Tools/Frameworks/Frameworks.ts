import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Bootstrap from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/BootstrapsAndTailwind/Bootstrap';
import ReactBootstrap from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/BootstrapsAndTailwind/ReactBootstrap';
import Tailwind from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/BootstrapsAndTailwind/Tailwind';

const Frameworks: Subpage = {
    name: "Frameworks",
    subpages: [
        Bootstrap,
        ReactBootstrap,
        Tailwind
    ]
};

export default Frameworks;