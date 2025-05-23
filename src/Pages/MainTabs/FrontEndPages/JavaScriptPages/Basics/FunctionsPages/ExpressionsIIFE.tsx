import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ExpressionsIIFE = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/ExpressionsIIFE";

    return (
        <>
            <Header text="Expressions & IIFE" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ExpressionsIIFE;
