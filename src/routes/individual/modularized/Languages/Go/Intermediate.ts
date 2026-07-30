import { RouteObject } from "react-router-dom";

import WebAPIs from '@/routes/individual/modularized/Languages/Go/Intermediate/WebAPIs';
import DataAndIO from '@/routes/individual/modularized/Languages/Go/Intermediate/DataAndIO';
import Database from '@/routes/individual/modularized/Languages/Go/Intermediate/Database';
import Config from '@/routes/individual/modularized/Languages/Go/Intermediate/Config';

const Intermediate: RouteObject[] = [
  ...WebAPIs,
  ...DataAndIO,
  ...Database,
  ...Config,
];

export default Intermediate;
