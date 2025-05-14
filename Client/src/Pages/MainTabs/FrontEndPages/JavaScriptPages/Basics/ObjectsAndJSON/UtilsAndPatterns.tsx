import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const UtilsAndPatterns = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/UtilsAndPatterns";

    return (
        <>
            <Header text="Utilities and Patterns" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default UtilsAndPatterns;
