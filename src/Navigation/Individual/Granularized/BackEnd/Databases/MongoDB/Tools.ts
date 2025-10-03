import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import ShellAndServer from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/ToolsNav/ShellAndServer';
import GUIAndCLI from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/ToolsNav/GUIAndCLI';
import DataMoveAndBackup from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/ToolsNav/DataMoveAndBackup';
import Monitoring from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/ToolsNav/Monitoring';
import DevWorkflow from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/ToolsNav/DevWorkflow';


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