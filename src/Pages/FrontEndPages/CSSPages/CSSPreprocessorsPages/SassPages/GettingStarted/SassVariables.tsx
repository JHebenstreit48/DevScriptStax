import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const SassVariables = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Preprocessors/SassNotes/GettingStarted/Variables.md';

    return (

        <>
            <Header text="Sass Variables and Indentation" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default SassVariables;
