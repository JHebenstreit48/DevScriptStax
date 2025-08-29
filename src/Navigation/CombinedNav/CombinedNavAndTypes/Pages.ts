import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import frontEnd from "@/Navigation/CombinedNav/CombinedTopics/frontEnd";
import backEnd from "@/Navigation/CombinedNav/CombinedTopics/backEnd";
import cloudServices from "@/Navigation/CombinedNav/CombinedTopics/cloudServices";
import testing from "@/Navigation/CombinedNav/CombinedTopics//testing";
import tools from "@/Navigation/CombinedNav/CombinedTopics/tools";
import languages from "@/Navigation/CombinedNav/CombinedTopics/languages";
import graphQLAndApollo from "@/Navigation/CombinedNav/CombinedTopics/graphQLAndApollo";

const pages: Subpage[] = [
  {
    name: "Home",
    subpages: [],
  },
  frontEnd,
  backEnd,
  cloudServices,
  testing,
  tools,
  languages,
  graphQLAndApollo,
  // stacks
];

export default pages;