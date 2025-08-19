import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import PythonNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Python';
import TSNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/TypeScript';
import RustNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Rust';
import GoNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Go';
import DartNav from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Dart';

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
