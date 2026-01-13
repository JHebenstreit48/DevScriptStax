import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityRulesPatterns = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/RulesAndEmulator/SecurityRulesPatterns'));
const EmulatorSuite = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/RulesAndEmulator/EmulatorSuite'));

const RulesAndEmulator: RouteObject[] = [
  {
    path: '/firebase/advanced/rules-emulator/security-rules-patterns',
    element: <SecurityRulesPatterns />,
  },
  {
    path: '/firebase/advanced/rules-emulator/emulator-suite',
    element: <EmulatorSuite />,
  },
];

export default RulesAndEmulator;
