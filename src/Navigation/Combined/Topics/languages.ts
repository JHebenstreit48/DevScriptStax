import type { Subpage } from '@/types/navigation';

import Python from '@/Navigation/Individual/Topics/Languages/Python';
import JavaScript from '@/Navigation/Individual/Topics/Languages/JavaScript';
import TypeScript from '@/Navigation/Individual/Topics/Languages/TypeScript';
import Ruby from '@/Navigation/Individual/Topics/Languages/Ruby';
import Rust from '@/Navigation/Individual/Topics/Languages/Rust';
import Go from '@/Navigation/Individual/Topics/Languages/Go';
import Dart from '@/Navigation/Individual/Topics/Languages/Dart';

const languages: Subpage = {
  name: 'Languages',
  subpages: [
    JavaScript,
    TypeScript,
    Python,
    Rust,
    Ruby,
    Go,
    Dart
  ]
};

export default languages;