import { RouteObject } from "react-router-dom";

import Automation from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Advanced/Automation';
import Mocking from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Advanced/Mocking';
import Portability from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Advanced/Portability';
import Protocols from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Advanced/Protocols';
import Security from '@/routes/individual/modularized/toolsAndTesting/Tools/API/Postman/Advanced/Security';

const Advanced: RouteObject[] = [
  ...Automation,
  ...Mocking,
  ...Portability,
  ...Protocols,
  ...Security,
];

export default Advanced;
