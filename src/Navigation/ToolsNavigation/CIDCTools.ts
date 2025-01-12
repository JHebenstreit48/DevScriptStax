import { Subpage } from "@/Navigation/NavigationTypes";

const CICDToolsNavigation: Subpage = {
  name: "CICD Tools",
  subpages: [
{
                name: "CircleCI",
                subpages: [
                  { name: "CircleCI Notes", path: "/tools/cicd/circleci" },
                  { name: "CircleCI Code Notes", path: "/tools/cicd/circleci/circlecicode" },
                ],
              },
              {
                name: "Jenkins",
                subpages: [
                  { name: "Jenkins Notes", path: "/tools/cicd/jenkins" },
                  { name: "Jenkins Code Notes", path: "/tools/cicd/jenkins/jenkinscode" },
                ],
              },
  ],
};

export default CICDToolsNavigation;




