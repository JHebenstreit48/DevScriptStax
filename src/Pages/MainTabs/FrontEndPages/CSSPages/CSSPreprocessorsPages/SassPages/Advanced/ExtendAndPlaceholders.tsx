import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ExtendAndPlaceholders = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Preprocessors/SassNotes/Advanced/ExtendAndPlaceholders';

    return (

        <>
            <Header text="Sass Extend & Placeholders" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ExtendAndPlaceholders;
