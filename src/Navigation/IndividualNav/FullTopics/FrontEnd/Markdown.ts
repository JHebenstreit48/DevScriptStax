import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import MarkdownBasics from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Basics';  
import MarkdownIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Intermediate';
import MarkdownAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Advanced';

const Markdown: Subpage = {
  name: 'Markdown',
  subpages: [
    MarkdownBasics,
    MarkdownIntermediate,
    MarkdownAdvanced
  ]
};

export default Markdown;
