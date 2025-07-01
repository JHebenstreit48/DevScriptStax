import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const PostCSSCode = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSSCode';

    return (

        <>

            <Header text="Post CSS Notes" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default PostCSSCode;
