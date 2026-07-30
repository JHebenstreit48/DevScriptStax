import type { Subpage } from '@/types/navigation';

import Extending from '@/navigation/individual/modularized/FrontEnd/Markdown/Advanced/Extending';
import BestPractices from '@/navigation/individual/modularized/FrontEnd/Markdown/Advanced/BestPractices';

const MarkdownAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Extending,
    BestPractices
  ]
};

export default MarkdownAdvanced;