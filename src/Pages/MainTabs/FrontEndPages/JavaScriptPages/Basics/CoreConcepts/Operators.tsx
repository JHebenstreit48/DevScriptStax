import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const Operators = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/Operators";

    return (

        <>
            <Header text="JavaScript Operators" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Operators;
