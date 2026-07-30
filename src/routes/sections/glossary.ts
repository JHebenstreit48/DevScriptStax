import { RouteObject } from "react-router-dom";

import Testing from '@/routes/individual/topics/Glossary/Testing';
import BackEnd from '@/routes/individual/topics/Glossary/BackEnd';

const glossary: RouteObject[] = [
  ...Testing,
  ...BackEnd,
];

export default glossary;