import { RouteObject } from "react-router-dom";

import Testing from '@/routes/Individual/FullRoutes/Glossary/Testing';
import BackEnd from '@/routes/Individual/FullRoutes/Glossary/BackEnd';

const glossary: RouteObject[] = [
  ...Testing,
  ...BackEnd,
];

export default glossary;