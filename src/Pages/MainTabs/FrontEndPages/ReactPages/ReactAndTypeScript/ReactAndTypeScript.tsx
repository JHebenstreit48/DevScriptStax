import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

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
