import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import TSBasics from './TypeScriptNav/Basics';
import TSIntermediate from './TypeScriptNav/Intermediate';
import TSAdvanced from './TypeScriptNav/Advanced';
import TSBestPractices from './TypeScriptNav/BestPractices';

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