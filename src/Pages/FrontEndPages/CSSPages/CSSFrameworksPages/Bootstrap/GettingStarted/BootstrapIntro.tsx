import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const BootstrapIntro = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapIntro.md';

    return (

        <>
            <Header text="Bootstrap Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapIntro;
