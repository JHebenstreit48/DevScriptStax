import type { Subpage } from '@/types/navigation';

import MarkdownBasics from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Basics';  
import MarkdownIntermediate from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Intermediate';
import MarkdownAdvanced from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Advanced';

const Markdown: Subpage = {
  name: 'Markdown',
  subpages: [
    MarkdownBasics,
    MarkdownIntermediate,
    MarkdownAdvanced
  ]
};

export default Markdown;
