import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import MarkdownBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Basics';  
import MarkdownIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Intermediate';
import MarkdownAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Advanced';
import MarkdownBestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/BestPractices';

const MarkdownNav: Subpage = {
  name: 'Markdown',
  subpages: [
    MarkdownBasics,
    MarkdownIntermediate,
    MarkdownAdvanced,
    MarkdownBestPractices
  ]
};

export default MarkdownNav;
