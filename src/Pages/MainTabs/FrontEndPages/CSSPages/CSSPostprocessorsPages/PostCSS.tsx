import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const WhatArePost = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSS';

    return (

        <>
            <Header text="Post CSS" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default WhatArePost;
