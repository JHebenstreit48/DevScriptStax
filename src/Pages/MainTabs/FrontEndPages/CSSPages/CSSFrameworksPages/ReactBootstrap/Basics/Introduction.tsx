import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ReactBootstrapIntro = () => {
    const markdownFilePath = "FrontEndNotes/CSSNotes/Frameworks/ReactBootstrap/Basics/Introduction";

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
