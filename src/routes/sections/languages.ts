import { RouteObject } from "react-router-dom";

import JavaScript from '@/routes/individual/topics/Languages/javascript';
import TypeScript from '@/routes/individual/topics/Languages/typescript';
import Python from '@/routes/individual/topics/Languages/python';
import Ruby from '@/routes/individual/topics/Languages/ruby';
import Rust from '@/routes/individual/topics/Languages/rust';
import Go from '@/routes/individual/topics/Languages/go';
import Dart from '@/routes/individual/topics/Languages/dart';


const languages: RouteObject[] = [
  ...JavaScript,
  ...TypeScript,
  ...Python,
  ...Ruby,
  ...Rust,
  ...Go,
  ...Dart,
  
];

export default languages;