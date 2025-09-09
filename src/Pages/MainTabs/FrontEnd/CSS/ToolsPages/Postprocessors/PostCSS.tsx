import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

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
