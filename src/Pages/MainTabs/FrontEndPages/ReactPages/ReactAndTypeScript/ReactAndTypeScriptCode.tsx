import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const ReactAndTypeScriptCode = () => {
    const markdownFilePath = '/ReactAndTS/ReactAndTypeScriptCode';

    return (

        <>

            <Header text="React + TypeScript Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default ReactAndTypeScriptCode;
