import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Transform = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Transform.md';

    return (

        <>
            <Header text="CSS Transform" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Transform;
