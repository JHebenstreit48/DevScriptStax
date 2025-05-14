import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Promises = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Intermediate/ModernES6/Promises";

    return (

        <>
            <Header text="JS Promises and Async/Await" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Promises;
