import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CryptoBasics = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/Security/CryptoBasics'));
const HTTPSTLSServer = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/Security/HTTPSTLSServer'));

const Security: RouteObject[] = [
  {
    path: '/backend/frameworks/nodejs/advanced/security/crypto-basics',
    element: <CryptoBasics />,
  },
  {
    path: '/backend/frameworks/nodejs/advanced/security/https-tls-server',
    element: <HTTPSTLSServer />,
  },
];

export default Security;
