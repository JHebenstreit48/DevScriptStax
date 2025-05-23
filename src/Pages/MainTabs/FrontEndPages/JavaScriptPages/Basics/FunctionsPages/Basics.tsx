import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const FunctionBasics = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/BasicsAndDeclare";

    return (
        <>
            <Header text="Basics" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default FunctionBasics;
