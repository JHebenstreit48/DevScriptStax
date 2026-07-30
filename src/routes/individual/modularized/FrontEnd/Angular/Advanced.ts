import { RouteObject } from 'react-router-dom';

import changeDetection from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/ChangeDetection';
import performance from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/Performance';
import rxJSAndReactive from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/RxJSAndReactive';
import animations from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/Animations';
import tsIntegration from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/TSIntegration';
import security from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/Security';

const Advanced: RouteObject[] = [
  ...changeDetection,
  ...performance,
  ...rxJSAndReactive,
  ...animations,
  ...tsIntegration,
  ...security,
];

export default Advanced;