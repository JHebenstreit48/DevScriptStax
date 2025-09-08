import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ShellAndServer from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/ToolsNav/ShellAndServer';
import GUIAndCLI from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/ToolsNav/GUIAndCLI';
import DataMoveAndBackup from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/ToolsNav/DataMoveAndBackup';
import Monitoring from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/ToolsNav/Monitoring';
import DevWorkflow from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/ToolsNav/DevWorkflow';


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