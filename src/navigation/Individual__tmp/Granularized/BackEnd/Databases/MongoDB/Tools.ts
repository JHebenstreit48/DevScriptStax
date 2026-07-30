import type { Subpage } from '@/types/navigation';

import ShellAndServer from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/ShellAndServer';
import GUIAndCLI from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/GUIAndCLI';
import DataMoveAndBackup from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/DataMoveAndBackup';
import Monitoring from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/Monitoring';
import DevWorkflow from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/DevWorkflow';

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