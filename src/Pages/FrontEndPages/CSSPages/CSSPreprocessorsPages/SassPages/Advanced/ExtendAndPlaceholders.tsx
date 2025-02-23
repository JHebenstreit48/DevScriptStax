import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const ExtendAndPlaceholders = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Preprocessors/SassNotes/Advanced/ExtendAndPlaceholders.md';

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
