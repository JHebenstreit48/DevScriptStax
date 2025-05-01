import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

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
