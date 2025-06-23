import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import PythonNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Python';
import TSNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/TypeScript';
import RustNav from '@/Navigation/IndividualNav/ProgrammingLanguages/Rust';
import GoNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Go';
import DartNav from '@/Navigation/IndividualNav/ProgrammingLanguages/Dart';

const languages: Subpage = {
  name: 'Languages',
  subpages: [
    TSNav,
    PythonNav,
    RustNav,
    GoNav,
    DartNav
  ]
};

export default languages;
