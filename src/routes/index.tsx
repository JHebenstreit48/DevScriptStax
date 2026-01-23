import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';
import About from '@/Pages/Special/About';
import frontEnd from '@/routes/Sections/frontEnd';
import languages from '@/routes/Sections/languages';
import backEnd from '@/routes/Sections/backEnd';
import cloudAndDeployment from '@/routes/Sections/cloudAndDeployment';
import testing from '@/routes/Sections/testing';
import tools from '@/routes/Sections/tools';
import graphQLAndApollo from '@/routes/Sections/graphQLAndApollo';
import stacks from '@/routes/Sections/stacks';


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
      ...frontEnd,
      ...languages,
      ...backEnd,
      ...cloudAndDeployment,
      ...testing,
      ...tools,
      ...graphQLAndApollo,
      ...stacks,
    ],
  },
]);