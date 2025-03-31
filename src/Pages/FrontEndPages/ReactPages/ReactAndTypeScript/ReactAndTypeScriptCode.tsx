import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const ReactAndTypeScriptCode = () => {
    const markdownFilePath = '/ReactAndTS/ReactAndTypeScriptCode.md';

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
