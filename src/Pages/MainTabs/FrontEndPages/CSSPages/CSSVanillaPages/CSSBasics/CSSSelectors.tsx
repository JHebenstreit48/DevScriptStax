import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSSSelectors = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSSelectors';

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
