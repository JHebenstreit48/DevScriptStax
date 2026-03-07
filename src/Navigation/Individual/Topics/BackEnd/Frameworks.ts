import type { Subpage } from '@/types/navigation';

import Django from '@/Navigation/Individual/Topics/BackEnd/Frameworks/Django';
import ExpressJS from '@/Navigation/Individual/Topics/BackEnd/Frameworks/ExpressJS';
import Flask from '@/Navigation/Individual/Topics/BackEnd/Frameworks/Flask';
import KoaJS from '@/Navigation/Individual/Topics/BackEnd/Frameworks/KoaJS';
import NodeJS from '@/Navigation/Individual/Topics/BackEnd/Frameworks/NodeJS';
import RubyOnRails from '@/Navigation/Individual/Topics/BackEnd/Frameworks/RubyOnRails';
import Spring from '@/Navigation/Individual/Topics/BackEnd/Frameworks/Spring';
// import WebSockets from '@/Navigation/Individual/Topics/BackEnd/Frameworks/WebSockets';

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