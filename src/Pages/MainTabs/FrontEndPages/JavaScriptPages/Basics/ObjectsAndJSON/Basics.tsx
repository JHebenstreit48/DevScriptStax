import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ObjectsBasics = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/Basics";

    return (
        <>
            <Header text="Objects Basics" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ObjectsBasics;
