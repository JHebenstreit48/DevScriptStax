import type { Subpage } from '@/types/navigation';

import NodeJS from '@/navigation/individual/topics/BackEnd/Frameworks/NodeJS';
import ExpressJS from '@/navigation/individual/topics/BackEnd/Frameworks/ExpressJS';
import KoaJS from '@/navigation/individual/topics/BackEnd/Frameworks/KoaJS';
import Django from '@/navigation/individual/topics/BackEnd/Frameworks/Django';
import Flask from '@/navigation/individual/topics/BackEnd/Frameworks/Flask';
import RubyOnRails from '@/navigation/individual/topics/BackEnd/Frameworks/RubyOnRails';
import Spring from '@/navigation/individual/topics/BackEnd/Frameworks/Spring';
import WebSockets from '@/navigation/individual/topics/BackEnd/Frameworks/WebSockets';

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
        WebSockets
    ]
};

export default Frameworks;