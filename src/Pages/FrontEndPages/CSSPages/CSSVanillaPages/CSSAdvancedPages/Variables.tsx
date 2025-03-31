import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Variables = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Variables.md';

    return (

        <>
            <Header text="CSS Variables" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Variables;
