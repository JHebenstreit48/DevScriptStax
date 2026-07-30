import type { Subpage } from '@/types/navigation';

import MarkdownBasics from '@/navigation/individual/modularized/FrontEnd/Markdown/Basics';  
import MarkdownIntermediate from '@/navigation/individual/modularized/FrontEnd/Markdown/Intermediate';
import MarkdownAdvanced from '@/navigation/individual/modularized/FrontEnd/Markdown/Advanced';

const Markdown: Subpage = {
  name: 'Markdown',
  subpages: [
    MarkdownBasics,
    MarkdownIntermediate,
    MarkdownAdvanced
  ]
};

export default Markdown;
