import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Extending from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Advanced/Extending';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Advanced/BestPractices';

const MarkdownAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Extending,
    BestPractices
  ]
};

export default MarkdownAdvanced;