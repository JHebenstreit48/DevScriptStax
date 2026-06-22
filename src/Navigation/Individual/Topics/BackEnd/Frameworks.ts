import type { Subpage } from '@/types/navigation';

import NodeJS from '@/Navigation/Individual/Topics/BackEnd/Frameworks/NodeJS';
import ExpressJS from '@/Navigation/Individual/Topics/BackEnd/Frameworks/ExpressJS';
import KoaJS from '@/Navigation/Individual/Topics/BackEnd/Frameworks/KoaJS';
import Django from '@/Navigation/Individual/Topics/BackEnd/Frameworks/Django';
import Flask from '@/Navigation/Individual/Topics/BackEnd/Frameworks/Flask';
import RubyOnRails from '@/Navigation/Individual/Topics/BackEnd/Frameworks/RubyOnRails';
import Spring from '@/Navigation/Individual/Topics/BackEnd/Frameworks/Spring';
// import WebSockets from '@/Navigation/Individual/Topics/BackEnd/Frameworks/WebSockets';

const Frameworks: Subpage = {
    name: 'Frameworks',
    subpages: [
        NodeJS,
        ExpressJS,
        KoaJS,
        Django,
        Flask,
        RubyOnRails,
        Spring,
        // WebSockets
    ]
};

export default Frameworks;