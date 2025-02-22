import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const SassSyntax = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Preprocessors/SassNotes/GettingStarted/Syntax.md';

    return (

        <>
            <Header text="Sass Syntax & Indentation" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default SassSyntax;
