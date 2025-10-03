import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Python from '@/Navigation/Individual/FullTopics/Languages/Python';
import JavaScript from '@/Navigation/Individual/FullTopics/Languages/JavaScript';
import TypeScript from '@/Navigation/Individual/FullTopics/Languages/TypeScript';
import Rust from '@/Navigation/Individual/FullTopics/Languages/Rust';
import Go from '@/Navigation/Individual/FullTopics/Languages/Go';
import Dart from '@/Navigation/Individual/FullTopics/Languages/Dart';

const languages: Subpage = {
  name: 'Languages',
  subpages: [
    JavaScript,
    TypeScript,
    Python,
    Rust,
    Go,
    Dart
  ]
};

export default languages;