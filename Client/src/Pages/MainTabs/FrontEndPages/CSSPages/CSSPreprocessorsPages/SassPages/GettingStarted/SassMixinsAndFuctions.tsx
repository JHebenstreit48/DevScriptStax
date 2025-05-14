import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

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
