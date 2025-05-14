import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const SassIntro = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Preprocessors/SassNotes/GettingStarted/Introduction';

    return (

        <>
            <Header text="Sass Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default SassIntro;
