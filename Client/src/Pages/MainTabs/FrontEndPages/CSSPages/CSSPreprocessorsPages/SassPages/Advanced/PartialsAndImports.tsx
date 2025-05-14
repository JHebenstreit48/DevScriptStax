import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const PartialsAndImports = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Preprocessors/SassNotes/Advanced/PartialsAndImports.md';

    return (

        <>
            <Header text="Sass Partials & Imports" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PartialsAndImports;
