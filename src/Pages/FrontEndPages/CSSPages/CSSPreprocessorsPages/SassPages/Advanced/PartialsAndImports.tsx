import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
