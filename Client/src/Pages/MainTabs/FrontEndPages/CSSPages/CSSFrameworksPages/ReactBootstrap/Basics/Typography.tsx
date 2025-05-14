import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ReactBSTypography = () => {
    const markdownFilePath = "/FrontEndNotes/CSSNotes/Frameworks/ReactBootstrap/Basics/Typography.md";

    return (
        <>
            <Header text="React Bootstrap Typography" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ReactBSTypography;
