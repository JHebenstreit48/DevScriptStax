import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const PostCSSCode = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSSCode.md';

    return (

        <>

            <Header text="Post CSS Notes" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default PostCSSCode;
