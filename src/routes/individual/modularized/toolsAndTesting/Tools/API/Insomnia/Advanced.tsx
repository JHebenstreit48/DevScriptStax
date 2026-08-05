import { RouteObject } from "react-router-dom";

import InsoAndCI from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Insomnia/Advanced/InsoAndCI';
import Portability from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Insomnia/Advanced/Portability';
import Extensibility from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Insomnia/Advanced/Extensibility';
import Protocols from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Insomnia/Advanced/Protocols';
import Security from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Insomnia/Advanced/Security';
import Mocking from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Insomnia/Advanced/Mocking';

const Advanced: RouteObject[] = [
  ...InsoAndCI,
  ...Portability,
  ...Extensibility,
  ...Protocols,
  ...Security,
  ...Mocking,
];

export default Advanced;
