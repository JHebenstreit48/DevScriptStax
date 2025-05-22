import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import PythonNavigation from '@/Navigation/IndividualNav/ProgrammingLanguagesNavigation/Python';
import RustNavigation from '@/Navigation/IndividualNav/ProgrammingLanguagesNavigation/Rust';
import TypeScriptNavigation from '@/Navigation/IndividualNav/ProgrammingLanguagesNavigation/Typescript';
import GoNavigation from '@/Navigation/IndividualNav/ProgrammingLanguagesNavigation/Go';
import DartNavigation from '@/Navigation/IndividualNav/ProgrammingLanguagesNavigation/Dart';

const webLanguagesNav: Page = {
  name: 'Web Languages',
  subpages: [
    PythonNavigation,
    RustNavigation,
    TypeScriptNavigation,
    GoNavigation,
    DartNavigation
  ]
};

export default webLanguagesNav;
