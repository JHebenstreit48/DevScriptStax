import type { Subpage } from '@/types/navigation';

import JavaScript from '@/Navigation/Individual/Topics/Languages/JavaScript';
import TypeScript from '@/Navigation/Individual/Topics/Languages/TypeScript';
import Python from '@/Navigation/Individual/Topics/Languages/Python';
import Go from '@/Navigation/Individual/Topics/Languages/Go';
import Ruby from '@/Navigation/Individual/Topics/Languages/Ruby';
import Rust from '@/Navigation/Individual/Topics/Languages/Rust';
import Dart from '@/Navigation/Individual/Topics/Languages/Dart';

const languages: Subpage = {
  name: 'Languages',
  subpages: [
    JavaScript,
    TypeScript,
    Python,
    Go,
    Ruby,
    Rust,
    Dart
  ]
};

export default languages;