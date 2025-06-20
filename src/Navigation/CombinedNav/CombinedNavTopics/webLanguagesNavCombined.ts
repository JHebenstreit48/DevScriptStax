import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import PythonNav from '@/Navigation/IndividualNav/ProgrammingLanguages/Python';
import RustNav from '@/Navigation/IndividualNav/ProgrammingLanguages/Rust';
import TSNav from '@/Navigation/IndividualNav/ProgrammingLanguages/Typescript';
import GoNav from '@/Navigation/IndividualNav/ProgrammingLanguages/Go';
import DartNav from '@/Navigation/IndividualNav/ProgrammingLanguages/Dart';

const webLanguagesNav: Page = {
  name: 'Web Languages',
  subpages: [
    PythonNav,
    RustNav,
    TSNav,
    GoNav,
    DartNav
  ]
};

export default webLanguagesNav;
