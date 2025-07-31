import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";
import ChangeDetection from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/ChangeDetection";
import Performance from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/Performance";
import RxJSAndReactive from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/RxJSAndReactiveProgram";
import Animations from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/Animations";
import TSIntegration from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/TSIntegration";
import Security from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced/SecurityNav";

const AngularAdvanced: Subpage = {
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

export default AngularAdvanced;