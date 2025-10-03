import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";
import IntroductionAndSelectors from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Basics/IntroductionAndSelectors';
import BoxModelAndPosition from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Basics/BoxModelAndPositioning';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    IntroductionAndSelectors,
    BoxModelAndPosition
  ]
};

export default Basics;