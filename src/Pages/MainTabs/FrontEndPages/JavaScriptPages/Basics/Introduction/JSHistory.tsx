import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const JSHistory = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/Introduction/History";

    return (

        <>
            <Header text="JavaScript History" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default JSHistory;
