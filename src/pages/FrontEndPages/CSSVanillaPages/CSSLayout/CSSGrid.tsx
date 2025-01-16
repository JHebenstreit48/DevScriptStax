import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const CSSGrid = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSLayoutsNotes/CSSGrid.md';

    return (

        <>

            <Header text="CSS Grid" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default CSSGrid;
