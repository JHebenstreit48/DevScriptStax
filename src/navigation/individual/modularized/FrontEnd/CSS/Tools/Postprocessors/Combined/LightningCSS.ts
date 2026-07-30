import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced';

const LightningCSS: Subpage = {
  name: 'LightningCSS',
  subpages: [
    Basics,
    Advanced
  ],
};

export default LightningCSS;