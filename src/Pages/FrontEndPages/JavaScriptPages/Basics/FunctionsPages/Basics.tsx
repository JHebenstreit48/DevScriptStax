import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const FunctionBasics = () => {
    const markdownFilePath = "/FrontEndPages/JavaScriptPages/Basics/FunctionsNotes/Basics.md";

    return (
        <>
            <Header text="Basics & Declarations" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default FunctionBasics;
