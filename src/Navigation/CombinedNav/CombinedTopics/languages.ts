import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Python from '@/Navigation/IndividualNav/FullTopics/Languages/Python';
import TypeScript from '@/Navigation/IndividualNav/FullTopics/Languages/TypeScript';
import Rust from '@/Navigation/IndividualNav/FullTopics/Languages/Rust';
import Go from '@/Navigation/IndividualNav/FullTopics/Languages/Go';
import Dart from '@/Navigation/IndividualNav/FullTopics/Languages/Dart';

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