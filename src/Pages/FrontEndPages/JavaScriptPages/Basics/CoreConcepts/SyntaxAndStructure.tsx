import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const SyntaxStructure = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/SyntaxStructure.md";

    return (

        <>
            <Header text="JavaScript Syntax And Structure" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default SyntaxStructure;
