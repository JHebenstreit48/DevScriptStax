import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import CLIAndAdmin from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Tools/CLIAndAdmin";
import BackupAndRestore from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore";
import GUIClients from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Tools/GUIClients";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    CLIAndAdmin,
    BackupAndRestore,
    GUIClients
  ]
};

export default Tools;