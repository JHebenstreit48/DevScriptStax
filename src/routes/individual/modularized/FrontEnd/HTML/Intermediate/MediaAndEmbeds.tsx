import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// -------------------- Media and Embeds Start --------------------
const MediaElements = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Intermediate/MediaAndEmbeds/Media'));
const Embedding = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Intermediate/MediaAndEmbeds/Embedding'));
// --------------------- Media and Embeds End ---------------------

const MediaAndEmbeds: RouteObject[] = [
  {
    path: '/front-end/html/intermediate/media-and-embeds/media',
    element: <MediaElements />,
  },
  {
    path: '/front-end/html/intermediate/media-and-embeds/embedding',
    element: <Embedding />,
  },
];

export default MediaAndEmbeds;