import type { Subpage } from '@/types/navigation';

import JavaScript from '@/navigation/individual/topics/Languages/JavaScript';
import TypeScript from '@/navigation/individual/topics/Languages/TypeScript';
import Python from '@/navigation/individual/topics/Languages/Python';
import Go from '@/navigation/individual/topics/Languages/Go';
import Ruby from '@/navigation/individual/topics/Languages/Ruby';
import Rust from '@/navigation/individual/topics/Languages/Rust';
import Dart from '@/navigation/individual/topics/Languages/Dart';

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