import { RouteObject } from "react-router-dom";

import ShellAndServer from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/ShellAndServer";
import GUIAndCLI from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/GUIAndCLI";


import DevWorkflow from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Tools/DevWorkflow";

const Tools: RouteObject[] = [

    ...ShellAndServer,
    ...GUIAndCLI,

    
    ...DevWorkflow
];

export default Tools;