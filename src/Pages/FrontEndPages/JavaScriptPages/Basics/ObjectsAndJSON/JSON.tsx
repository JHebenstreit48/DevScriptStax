import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const JSON = () => {
    const markdownFilePath = "/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/JSON.md";

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
