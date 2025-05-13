import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const BootstrapGrid = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapGrid.md';

    return (

        <>
            <Header text="Bootstrap Grid" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapGrid;
