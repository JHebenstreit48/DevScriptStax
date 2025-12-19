import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ControlDirectivesAndLoops = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/ControlDirectivesAndLoops'));
const OperatorsAndCalculations = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/OperatorsAndCalculations'));
const PartialsAndImports = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/PartialsAndImports'));
const ExtendAndPlaceholder = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/ExtendAndPlaceholder'));

const AdvancedConcepts: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/sass/advanced/control-directives-loops',
    element: <ControlDirectivesAndLoops />,
  },
  {
    path: '/css/tools/preprocessors/sass/advanced/operators-calculations',
    element: <OperatorsAndCalculations />,
  },
  {
    path: '/css/tools/preprocessors/sass/advanced/partials-imports',
    element: <PartialsAndImports />,
  },
  {
    path: '/css/tools/preprocessors/sass/advanced/extend-placeholder',
    element: <ExtendAndPlaceholder />,
  },
];

export default AdvancedConcepts;
