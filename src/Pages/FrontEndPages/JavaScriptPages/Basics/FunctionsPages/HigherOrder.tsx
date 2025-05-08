import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const HigherOrder = () => {
    const markdownFilePath = "/FrontEndPages/JavaScriptPages/Basics/FunctionsNotes/HigherOrder.md";

    return (
        <>
            <Header text="Higher-Order Functions" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default HigherOrder;
