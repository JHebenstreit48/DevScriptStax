import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MediaElements = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/MediaAndEmbeds/Media'));
const Embedding = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/MediaAndEmbeds/Embedding'));

const MediaAndEmbeds: RouteObject[] = [
  {
    path: '/front-end/html/basics/media-and-embeds/media-elements',
    element: <MediaElements />,
  },
  {
    path: '/front-end/html/basics/media-and-embeds/embedding-content',
    element: <Embedding />,
  },
];

export default MediaAndEmbeds;