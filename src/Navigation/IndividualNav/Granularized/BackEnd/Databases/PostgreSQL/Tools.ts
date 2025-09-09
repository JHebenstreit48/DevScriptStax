import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import CLIAndAdmin from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Tools/CLIAndAdmin";
import BackupAndRestore from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore";
import GUIClients from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Tools/GUIClients";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    CLIAndAdmin,
    BackupAndRestore,
    GUIClients
  ]
};

export default Tools;