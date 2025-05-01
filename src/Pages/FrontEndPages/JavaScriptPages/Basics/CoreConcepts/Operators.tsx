import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const Operators = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/Operators.md";

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
