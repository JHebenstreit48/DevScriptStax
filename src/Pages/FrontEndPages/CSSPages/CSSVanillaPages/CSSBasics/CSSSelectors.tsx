import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const CSSSelectors = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSSelectors.md';

    return (

        <>
            <Header text="CSS Selectors" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSSelectors;
