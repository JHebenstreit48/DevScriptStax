import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import frontEnd from "@/Navigation/Combined/Topics/frontEnd";
import backEnd from "@/Navigation/Combined/Topics/backEnd";
import cloudAndDeployment from '@/Navigation/Combined/Topics/cloudAndDeployment';
import testing from "@/Navigation/Combined/Topics//testing";
import tools from "@/Navigation/Combined/Topics/tools";
import languages from "@/Navigation/Combined/Topics/languages";
import graphQLAndApollo from "@/Navigation/Combined/Topics/graphQLAndApollo";
import stacks from "@/Navigation/Combined/Topics/stacks";

const pages: Subpage[] = [
  frontEnd,
  backEnd,
  cloudAndDeployment,
  testing,
  tools,
  languages,
  graphQLAndApollo,
  stacks
];

export default pages;