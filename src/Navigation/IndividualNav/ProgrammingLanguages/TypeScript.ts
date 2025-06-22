import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import TSBasics from '@/Navigation/IndividualNav/ProgrammingLanguages/TypeScriptNav/Basics';
import TSIntermediate from '@/Navigation/IndividualNav/ProgrammingLanguages/TypeScriptNav/Intermediate';
import TSAdvanced from '@/Navigation/IndividualNav/ProgrammingLanguages/TypeScriptNav/Advanced';
import TSBestPractices from '@/Navigation/IndividualNav/ProgrammingLanguages/TypeScriptNav/BestPractices';

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