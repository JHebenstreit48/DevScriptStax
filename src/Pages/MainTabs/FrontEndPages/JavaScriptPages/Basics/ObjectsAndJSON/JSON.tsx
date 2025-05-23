import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const JSON = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/JSON";

    return (
        <>
            <Header text="Working with JSON" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default JSON;
