import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// -------------------- Media and Embeds Start --------------------
const MediaElements = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/HTMLPages/Intermediate/MediaAndEmbeds/Media"
    )
);
const Embedding = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/HTMLPages/Intermediate/MediaAndEmbeds/Embedding"
    )
);
// --------------------- Media and Embeds End ---------------------

const htmlIntermediate: RouteObject[] = [
  {
    path: "/html/intermediate/mediaembeds/media",
    element: <MediaElements />,
  },
  {
    path: "/html/intermediate/mediaembeds/embedding",
    element: <Embedding />,
  },

  // -------------------- Tabular Data Start --------------------

  // --------------------- Tabular Data End ---------------------
];

export default htmlIntermediate;