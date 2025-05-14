import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const CSSGrid = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSLayoutsNotes/CSSGrid.md';

    return (

        <>

            <Header text="CSS Grid" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default CSSGrid;
