import type { Subpage } from '@/types/navigation';

import Django from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/Django';
import ExpressJS from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/ExpressJS';
import Flask from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/Flask';
import KoaJS from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/KoaJS';
import NodeJS from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/NodeJS';
import RubyOnRails from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/RubyOnRails';
import Spring from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/Spring';
// import WebSockets from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/WebSockets';

const Frameworks: Subpage = {
    name: 'Frameworks',
    subpages: [
        Django,
        ExpressJS,
        Flask,
        KoaJS,
        NodeJS,
        RubyOnRails,
        Spring,
        // WebSockets
    ]
};

export default Frameworks;