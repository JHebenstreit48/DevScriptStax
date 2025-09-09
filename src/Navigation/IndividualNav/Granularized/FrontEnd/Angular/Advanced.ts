import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";
import ChangeDetection from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Advanced/ChangeDetection";
import Performance from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Advanced/Performance";
import RxJSAndReactive from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Advanced/RxJSAndReactiveProgram";
import Animations from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Advanced/Animations";
import TSIntegration from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Advanced/TSIntegration";
import Security from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Advanced/SecurityNav";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    ChangeDetection,
    Performance,
    RxJSAndReactive,
    Animations,
    TSIntegration,
    Security,
  ],
};

export default Advanced;