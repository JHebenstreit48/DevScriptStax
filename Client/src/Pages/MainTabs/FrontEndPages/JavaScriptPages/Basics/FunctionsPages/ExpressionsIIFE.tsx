import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ExpressionsIIFE = () => {
    const markdownFilePath = "/FrontEndPages/JavaScriptPages/Basics/FunctionsNotes/ExpressionsIIFE";

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
