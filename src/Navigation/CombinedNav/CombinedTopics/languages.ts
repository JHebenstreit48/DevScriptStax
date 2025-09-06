import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Python from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Python';
import TypeScript from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/TypeScript';
import Rust from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Rust';
import Go from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Go';
import Dart from '@/Navigation/IndividualNav/FullTopics/LanguagesNav/Dart';

const languages: Subpage = {
  name: 'Languages',
  subpages: [
    TypeScript,
    Python,
    Rust,
    Go,
    Dart
  ]
};

export default languages;