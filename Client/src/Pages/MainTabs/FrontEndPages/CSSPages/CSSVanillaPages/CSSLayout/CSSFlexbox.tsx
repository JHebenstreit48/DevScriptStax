import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSSFlexbox = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSLayoutsNotes/CSSFlexbox';

    return (

        <>
            <Header text="CSS Flexbox" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSFlexbox;
