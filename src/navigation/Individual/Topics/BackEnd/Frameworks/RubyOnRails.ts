import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Advanced';

const RubyOnRails: Subpage = {
name: 'Ruby on Rails',
subpages: [
    Basics,
    Advanced
]
};

export default RubyOnRails;