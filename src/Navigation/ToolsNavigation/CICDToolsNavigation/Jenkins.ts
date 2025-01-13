import { Subpage } from "@/Navigation/NavigationTypes";

const JenkinsNavigation: Subpage = {
  name: "Jenkins",
  subpages: [
    { name: "Jenkins Notes", path: "/tools/cicd/jenkins" },
    { name: "Jenkins Code Notes", path: "/tools/cicd/jenkins/jenkinscode" },
  ],
};

export default JenkinsNavigation;
