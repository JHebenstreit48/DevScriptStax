import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSSPositioning = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSPositioning.md';

    return (

        <>
            <Header text="CSS Positioning" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSPositioning;
