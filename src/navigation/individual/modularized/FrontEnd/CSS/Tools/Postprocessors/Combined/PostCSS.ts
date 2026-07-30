import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced';

const PostCSS: Subpage = {
  name: 'PostCSS',
  subpages: [
    Basics,
    Advanced
  ],
};

export default PostCSS;