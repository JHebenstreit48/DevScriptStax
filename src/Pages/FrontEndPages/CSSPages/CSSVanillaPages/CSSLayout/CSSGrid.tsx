import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

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
