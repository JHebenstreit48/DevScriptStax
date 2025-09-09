import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// -------------------- Media and Embeds Start --------------------
const MediaElements = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEnd/HTML/Intermediate/MediaAndEmbeds/Media"
    )
);
const Embedding = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEnd/HTML/Intermediate/MediaAndEmbeds/Embedding"
    )
);
// --------------------- Media and Embeds End ---------------------

const MediaAndEmbeds: RouteObject[] = [
  {
    path: "/html/intermediate/media-and-embeds/media",
    element: <MediaElements />,
  },
  {
    path: "/html/intermediate/media-and-embeds/embedding",
    element: <Embedding />,
  },

  // -------------------- Tabular Data Start --------------------

  // --------------------- Tabular Data End ---------------------
];

export default MediaAndEmbeds;