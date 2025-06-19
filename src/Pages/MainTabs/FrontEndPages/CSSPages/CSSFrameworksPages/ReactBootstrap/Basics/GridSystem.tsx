import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const ReactBoostrapGrid = () => {
    const markdownFilePath = "FrontEndNotes/CSSNotes/Frameworks/ReactBootstrap/Basics/GridSystem";

    return (
        <>
            <Header text="React Bootstrap Grid" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ReactBoostrapGrid;
