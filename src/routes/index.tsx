import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';

import ErrorPage from '@/pages/special/Error';
import Home from '@/pages/special/Home';
import About from '@/pages/special/About';
import QRCodePage from '@/pages/special/qrCode';

import frontEnd from '@/routes/sections/frontEnd';
import languages from '@/routes/sections/languages';
import backEnd from '@/routes/sections/backEnd';
import cloudAndDeployment from '@/routes/sections/cloudAndDeployment';
import testing from '@/routes/sections/toolsAndTesting/testing';
import tools from '@/routes/sections/toolsAndTesting/tools';
import graphQLAndApollo from '@/routes/sections/graphQLAndApollo';
import stacks from '@/routes/sections/stacks';
import glossary from '@/routes/sections/glossary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'qrcode',
        element: <QRCodePage />
      },
      ...frontEnd,
      ...languages,
      ...backEnd,
      ...cloudAndDeployment,
      ...testing,
      ...tools,
      ...graphQLAndApollo,
      ...stacks,
      ...glossary,
    ],
  },
]);