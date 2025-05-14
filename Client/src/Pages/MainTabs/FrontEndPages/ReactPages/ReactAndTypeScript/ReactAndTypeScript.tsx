import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ReactAndTypeScript = () => {
    const markdownFilePath = "/ReactAndTS/ReactAndTypeScript";

    return (

        <>
            <Header text="React + TypeScript" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ReactAndTypeScript;
