import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const PartialsAndImports = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Preprocessors/SassNotes/Advanced/PartialsAndImports';

    return (

        <>
            <Header text="Sass Partials & Imports" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default PartialsAndImports;
