import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Arrow = () => {
    const markdownFilePath = "/FrontEndPages/JavaScriptPages/Basics/FunctionsNotes/Arrow";

    return (
        <>
            <Header text="Arrow Functions" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Arrow;
