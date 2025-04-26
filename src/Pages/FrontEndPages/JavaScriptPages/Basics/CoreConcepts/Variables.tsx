import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const JSVariables = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/Variables.md";

    return (

        <>
            <Header text="JavaScript Variables" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default JSVariables;
