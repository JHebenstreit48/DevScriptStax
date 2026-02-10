import { RouteObject } from 'react-router-dom';

import PatternsStyle from '@/routes/Individual/Granularized/Languages/TypeScript/Advanced/BestPractices/PatternsStyle';
import ToolingConfig from '@/routes/Individual/Granularized/Languages/TypeScript/Advanced/BestPractices/ToolingConfig';

const BestPractices: RouteObject[] = [
    ...PatternsStyle,
    ...ToolingConfig
  ];

export default BestPractices;