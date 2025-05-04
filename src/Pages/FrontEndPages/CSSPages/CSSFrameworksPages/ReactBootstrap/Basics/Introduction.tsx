import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ReactBootstrapIntro = () => {
    const markdownFilePath = "/FrontEndNotes/CSSNotes/Frameworks/ReactBootstrap/Basics/Introduction.md";

    return (
        <>
            <Header text="React Bootstrap Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ReactBootstrapIntro;
