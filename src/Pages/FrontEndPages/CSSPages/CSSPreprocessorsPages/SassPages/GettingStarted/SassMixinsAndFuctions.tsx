import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const MixinsAndFunctions = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Preprocessors/SassNotes/GettingStarted/MixinsAndFunctions.md';

    return (

        <>
            <Header text="Sass Mixins & Functions" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default MixinsAndFunctions;
