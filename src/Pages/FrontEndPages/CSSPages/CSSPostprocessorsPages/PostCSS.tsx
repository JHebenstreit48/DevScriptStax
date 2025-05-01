import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

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
