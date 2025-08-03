import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import MarkdownBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Basics';  
import MarkdownIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Intermediate';
import MarkdownAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Advanced';

const Markdown: Subpage = {
  name: 'Markdown',
  subpages: [
    MarkdownBasics,
    MarkdownIntermediate,
    MarkdownAdvanced
  ]
};

export default Markdown;
