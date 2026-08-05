import { RouteObject } from "react-router-dom";

import Cypress from '@/routes/individual/modularized/glossaryAndResources/Testing/EndToEnd/Cypress';

const Basics: RouteObject[] = [
  ...Cypress,
];

export default Basics;