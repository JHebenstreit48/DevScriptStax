import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

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
