import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Frameworks/RubyOnRails/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Frameworks/RubyOnRails/Advanced';

const RubyOnRails: Subpage = {
name: 'Ruby on Rails',
subpages: [
    Basics,
    Advanced
]
};

export default RubyOnRails;