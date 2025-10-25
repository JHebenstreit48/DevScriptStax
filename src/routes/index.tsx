// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';
import About from '@/Pages/Special/About'; // ⬅️ NEW

import backEnd from '@/routes/Sections/backEnd';
import cloudServices from '@/routes/Sections/cloudServices';
import frontEnd from '@/routes/Sections/frontEnd';
import graphQLAndApollo from '@/routes/Sections/graphQLAndApollo';
import languages from '@/routes/Sections/languages';
import testing from '@/routes/Sections/testing';
import tools from '@/routes/Sections/tools';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> }, // ⬅️ NEW
      ...backEnd,
      ...cloudServices,
      ...frontEnd,
      ...graphQLAndApollo,
      ...languages,
      ...testing,
      ...tools,
    ],
  },
]);