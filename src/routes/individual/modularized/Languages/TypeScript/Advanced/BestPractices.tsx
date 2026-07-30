import { RouteObject } from 'react-router-dom';

import PatternsStyle from '@/routes/individual/modularized/Languages/TypeScript/Advanced/BestPractices/PatternsStyle';
import ToolingConfig from '@/routes/individual/modularized/Languages/TypeScript/Advanced/BestPractices/ToolingConfig';

const BestPractices: RouteObject[] = [
    ...PatternsStyle,
    ...ToolingConfig
  ];

export default BestPractices;