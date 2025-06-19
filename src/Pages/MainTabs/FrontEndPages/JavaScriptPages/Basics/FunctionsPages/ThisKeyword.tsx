import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const ThisKeyword = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/ThisKeyword";

    return (

        <>
            <Header text="This Keyword" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ThisKeyword;
