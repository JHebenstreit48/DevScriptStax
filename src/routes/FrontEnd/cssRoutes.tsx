import { RouteObject } from "react-router-dom";

// ------------------------ CSS Vanilla Start ------------------------

import CSSIntro from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSIntro";
import CSSSelectors from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSSelectors";
import CSSBoxModel from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSBoxModel";
import CSSPositioning from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSPositioning";

// ------------------------- CSS Vanilla End -------------------------

// ------------------------- CSS Layouts Start ------------------------
import CSSFlexbox from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSLayout/CSSFlexbox";
import CSSGrid from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSLayout/CSSGrid";
// -------------------------- CSS Layouts End -------------------------

// ------------------------ CSS Advanced Start ------------------------
import Animations from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/Animations";
import MediaQueries from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/MediaQueries";
import Transform from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/Transform";
import Transitions from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/Transition";
import CSSVariables from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/CSSVariables";
// ------------------------- CSS Advanced End -------------------------

// ------------------------ CSS Vanilla End ------------------------


// ----------------------- CSS Frameworks Start -----------------------

// ----------------------- CSS Bootstrap Start ------------------------

// -------------- Bootstrap Getting Started Start --------------
import BootstrapIntro from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapIntro";
import BootstrapGrid from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapGrid";
import BootstrapTypography from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapTypography";
import BootstrapUtilities from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapUtilities";
// --------------- Bootstrap Getting Started End ---------------

// --------------- Bootstrap Components Start ----------------
import BootstrapAccordions from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Accordions";
import BootstrapAlerts from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Alerts";
import BootstrapButtons from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Buttons";
import BootstrapCards from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Cards";
import BootstrapCarousel from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Carousel";
import BootstrapDropdowns from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Dropdowns";
import BootstrapModals from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Modals";
import BootstrapTooltips from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Tooltips";
// ---------------- Bootstrap Components End -----------------

// ------------------------ CSS Bootstrap End ------------------------

// ---------------------- CSS Frameworks End ------------------------


// --------------------- CSS Preprocessors Start ---------------------

// ---------------------------- LESS Start ---------------------------
import LESS from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/LESSPages/LESS";
// import LESSCode from "@/pages/CSSPages/LESSCode";
// ----------------------------- LESS End ----------------------------

// --------------------------- Sass Start ----------------------------

// ------------------- Getting Started Start -------------------
import SassIntro from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/SassPages/GettingStarted/SassIntro";
import SassVariables from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/SassPages/GettingStarted/SassVariables";
import MixinsAndFunctions from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/SassPages/GettingStarted/SassMixinsAndFuctions";
// -------------------- Getting Started End --------------------

// ------------------- Advanced Concepts Start -------------------
import PartialsAndImports from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/SassPages/Advanced/PartialsAndImports";
import ExtendAndPlaceholders from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/SassPages/Advanced/ExtendAndPlaceholders";
// -------------------- Advanced Concepts End --------------------

// ----------------------------- Sass End -----------------------------

// -------------------- CSS Preprocessors End --------------------


// -------------------- CSS Postprocessors Start --------------------

import WhatArePost from "@/Pages/FrontEndPages/CSSPages/CSSPostprocessorsPages/PostCSS";
// import PostCSSCode from "@/pages/CSSPages/PostCSSCode";

// --------------------- CSS Postprocessors End ---------------------

const cssRoutes: RouteObject[] = [

    // ========================================================
    //               CSS Vanilla (Core Layouts) Start
    // ========================================================

    // ---------------------- CSS Basics Start ----------------------
    {
        path: '/css/vanillacss/basics/intro',
        element: <CSSIntro />,
    },
    {
        path: '/css/vanillacss/basics/selectors',
        element: <CSSSelectors />,
    },
    {
        path: '/css/vanillacss/basics/boxmodel',
        element: <CSSBoxModel />,
    },
    {
        path: '/css/vanillacss/basics/positioning',
        element: <CSSPositioning />,
    },
    // ----------------------- CSS Basics End -----------------------

    // ---------------------- CSS Layouts Start ----------------------
    {
        path: '/css/vanillacss/layouts/flexbox',
        element: <CSSFlexbox />,
    },
    {
        path: '/css/vanillacss/layouts/grid',
        element: <CSSGrid />,
    },
    // ----------------------- CSS Layouts End -----------------------

    // --------------------- CSS Advanced Start ---------------------
    {
        path: '/css/vanillacss/advanced/animations',
        element: <Animations />,
    },
    {
        path: '/css/vanillacss/advanced/mediaqueries',
        element: <MediaQueries />,
    },
    {
        path: '/css/vanillacss/advanced/transforms',
        element: <Transform />,
    },
    {
        path: '/css/vanillacss/advanced/transitionsandanimations',
        element: <Transitions />,
    },
    {
        path: '/css/vanillacss/advanced/variables',
        element: <CSSVariables />,
    },
    // ---------------------- CSS Advanced End ----------------------

    // ========================================================
    //                CSS Vanilla (Core Layouts) End
    // ========================================================


    // ========================================================
    //              CSS Frameworks (Bootstrap) Start
    // ========================================================

    // -------------- Bootstrap > Getting Started Start --------------
    {
        path: '/css/frameworks/bootstrap/gettingstarted/intro',
        element: <BootstrapIntro />,
    },
    {
        path: '/css/frameworks/bootstrap/gettingstarted/grid',
        element: <BootstrapGrid />,
    },
    {
        path: '/css/frameworks/bootstrap/gettingstarted/typography',
        element: <BootstrapTypography />,
    },
    {
        path: '/css/frameworks/bootstrap/gettingstarted/utilities',
        element: <BootstrapUtilities />,
    },
    // --------------- Bootstrap > Getting Started End ---------------

    // --------------- Bootstrap > Components Start ----------------
    {
        path: '/css/frameworks/bootstrap/components/accordions',
        element: <BootstrapAccordions />,
    },
    {
        path: '/css/frameworks/bootstrap/components/alerts',
        element: <BootstrapAlerts />,
    },
    {
        path: '/css/frameworks/bootstrap/components/buttons',
        element: <BootstrapButtons />,
    },
    {
        path: '/css/frameworks/bootstrap/components/cards',
        element: <BootstrapCards />,
    },
    {
        path: '/css/frameworks/bootstrap/components/carousel',
        element: <BootstrapCarousel />,
    },
    {
        path: '/css/frameworks/bootstrap/components/dropdowns',
        element: <BootstrapDropdowns />,
    },
    {
        path: '/css/frameworks/bootstrap/components/modals',
        element: <BootstrapModals />,
    },
    {
        path: '/css/frameworks/bootstrap/components/tooltips',
        element: <BootstrapTooltips />,
    },
    // ---------------- Bootstrap > Components End -----------------

    // ========================================================
    //               CSS Frameworks (Bootstrap) End
    // ========================================================

    // ========================================================
    //             CSS Preprocessors (LESS + Sass) Start
    // ========================================================

    // ---------------------------- LESS Start ----------------------------
    {
        path: '/css/preprocessors/less/gettingstarted/intro',
        element: <LESS />,
    },
    // ----------------------------- LESS End -----------------------------

    // ---------------------------- Sass Start ----------------------------

    // --------------- Sass > Getting Started Start ---------------
    {
        path: '/css/preprocessors/sass/gettingstarted/intro',
        element: <SassIntro />,
    },
    {
        path: '/css/preprocessors/sass/gettingstarted/variables',
        element: <SassVariables />,
    },
    {
        path: '/css/preprocessors/sass/gettingstarted/mixins',
        element: <MixinsAndFunctions />,
    },
    // ---------------- Sass > Getting Started End ----------------

    // --------------- Sass > Advanced Concepts Start ---------------
    {
        path: '/css/preprocessors/sass/advanced/partials',
        element: <PartialsAndImports />,
    },
    {
        path: '/css/preprocessors/sass/advanced/extend',
        element: <ExtendAndPlaceholders />,
    },
    // --------------- Sass > Advanced Concepts End ----------------

    // ----------------------------- Sass End -----------------------------

    // ========================================================
    //              CSS Preprocessors (LESS + Sass) End
    // ========================================================

    // ========================================================
    //                 CSS Postprocessors Start
    // ========================================================

    {
        path: '/css/postprocessors/overview/whatarepostprocessors',
        element: <WhatArePost />,
    },
    // {
    //   path: '/css/postprocessors/overview/postcsscode',
    //   element: <PostCSSCode />,
    // }

    // ========================================================
    //                  CSS Postprocessors End
    // ========================================================

    // ========================================================
    //                      CSS Notes End
    // ========================================================
];

export default cssRoutes;