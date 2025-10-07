import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";
import ChangeDetection from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Advanced/ChangeDetection";
import Performance from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Advanced/Performance";
import RxJSAndReactive from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Advanced/RxJSAndReactiveProgram";
import Animations from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Advanced/Animations";
import TSIntegration from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Advanced/TSIntegration";
import Security from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Advanced/Security";

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