import type { Subpage } from '@/types/navigation';

import ShellAndServer from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Tools/ShellAndServer';
import GUIAndCLI from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Tools/GUIAndCLI';
import DataMoveAndBackup from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Tools/DataMoveAndBackup';
import Monitoring from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Tools/Monitoring';
import DevWorkflow from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Tools/DevWorkflow';

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    ShellAndServer,
    GUIAndCLI,
    DataMoveAndBackup,
    Monitoring,
    DevWorkflow
  ],
};

export default Tools;