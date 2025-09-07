import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";
import IntroductionAndSelectors from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Basics/IntroductionAndSelectors';
import BoxModelAndPosition from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Basics/BoxModelAndPositioning';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    IntroductionAndSelectors,
    BoxModelAndPosition
  ]
};

export default Basics;