import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import CLIAndAdmin from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/ToolsNav/CLIAndAdmin";
import BackupAndRestore from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/ToolsNav/BackupAndRestore";
import GUIClients from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/ToolsNav/GUIClients";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    CLIAndAdmin,
    BackupAndRestore,
    GUIClients
  ]
};

export default Tools;