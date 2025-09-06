import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import frontEnd from "@/Navigation/CombinedNav/CombinedTopics/frontEnd";
import backEnd from "@/Navigation/CombinedNav/CombinedTopics/backEnd";
import cloudAndDeployment from '@/Navigation/CombinedNav/CombinedTopics/cloudAndDeployment';
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
  cloudAndDeployment,
  testing,
  tools,
  languages,
  graphQLAndApollo,
  // stacks
];

export default pages;