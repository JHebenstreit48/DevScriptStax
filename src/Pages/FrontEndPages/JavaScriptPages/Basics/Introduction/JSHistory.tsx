import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const JSHistory = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/Introduction/History.md";

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
