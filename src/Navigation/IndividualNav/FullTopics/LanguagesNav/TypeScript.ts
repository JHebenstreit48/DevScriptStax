import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import TSBasics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Basics';
import TSIntermediate from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Intermediate';
import TSAdvanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/Advanced';
import TSBestPractices from '@/Navigation/IndividualNav/Granularized/LanguagesNav/TypeScriptNav/BestPractices';

const TSNav: Subpage = {
    name: 'TypeScript',
    subpages: [
        TSBasics,
        TSIntermediate,
        TSAdvanced,
        TSBestPractices
    ]
};

export default TSNav;