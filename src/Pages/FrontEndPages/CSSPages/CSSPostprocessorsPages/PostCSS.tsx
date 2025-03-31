import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const WhatArePost = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSS.md';

    return (

        <>
            <Header text="Post CSS" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default WhatArePost;
