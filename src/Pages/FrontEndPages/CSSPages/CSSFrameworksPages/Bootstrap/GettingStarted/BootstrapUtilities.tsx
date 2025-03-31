import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const BootstrapUtilities = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapUtilities.md';

    return (

        <>
            <Header text="Bootstrap Utilities" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapUtilities;
