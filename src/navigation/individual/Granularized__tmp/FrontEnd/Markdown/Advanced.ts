import type { Subpage } from '@/types/navigation';

import Extending from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Advanced/Extending';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Advanced/BestPractices';

const MarkdownAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Extending,
    BestPractices
  ]
};

export default MarkdownAdvanced;