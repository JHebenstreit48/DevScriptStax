import { RouteObject } from "react-router-dom";

import Layout from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Layout';
import Navigation from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Navigation';
import Overlays from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Overlays';
import Data from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Data';
import Feedback from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Feedback';
import Forms from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Forms';

const Components: RouteObject[] = [
  ...Layout,
  ...Navigation,
  ...Overlays,
  ...Data,
  ...Feedback,
  ...Forms,
];

export default Components;
