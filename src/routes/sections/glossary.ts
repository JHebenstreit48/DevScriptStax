import { RouteObject } from "react-router-dom";

import Testing from '@/routes/individual/topics/glossaryAndResources/Testing';
import BackEnd from '@/routes/individual/topics/glossaryAndResources/BackEnd';

const glossary: RouteObject[] = [
  ...Testing,
  ...BackEnd,
];

export default glossary;