import type { Subpage } from '@/types/navigation';

import CLIAndAdmin from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Tools/CLIAndAdmin';
import BackupAndRestore from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore';
import GUIClients from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Tools/GUIClients';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    CLIAndAdmin,
    BackupAndRestore,
    GUIClients
  ]
};

export default Tools;