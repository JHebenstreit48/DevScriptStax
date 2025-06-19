import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

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
