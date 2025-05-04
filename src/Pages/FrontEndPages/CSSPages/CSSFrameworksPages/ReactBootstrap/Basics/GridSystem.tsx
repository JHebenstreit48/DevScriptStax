import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ReactBoostrapGrid = () => {
    const markdownFilePath = "/FrontEndNotes/CSSNotes/Frameworks/ReactBootstrap/Basics/GridSystem.md";

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
