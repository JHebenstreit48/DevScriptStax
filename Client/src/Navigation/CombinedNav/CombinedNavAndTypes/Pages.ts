import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import frontEndNav from "@/Navigation/CombinedNav/CombinedNavTopics/frontEndNavCombined";
import backEndNav from "@/Navigation/CombinedNav/CombinedNavTopics/backEndNavCombined";
import cloudServicesNav from "@/Navigation/CombinedNav/CombinedNavTopics/cloudServicesNavCombined";
import testingNav from "@/Navigation/CombinedNav/CombinedNavTopics/testingNavCombined";
import toolsNav from "@/Navigation/CombinedNav/CombinedNavTopics/toolsNavCombined";
import webLanguagesNav from "@/Navigation/CombinedNav/CombinedNavTopics/webLanguagesNavCombined";
import graphQLAndApolloNav from "@/Navigation/CombinedNav/CombinedNavTopics/graphQLAndApolloCombined";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  frontEndNav,
  backEndNav,
  cloudServicesNav,
  testingNav,
  toolsNav,
  webLanguagesNav,
  graphQLAndApolloNav
];

export default pages;