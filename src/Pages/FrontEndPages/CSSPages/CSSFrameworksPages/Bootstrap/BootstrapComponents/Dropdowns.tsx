import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const BootstrapDropdowns = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Dropdowns.md';

    return (

        <>
            <Header text="Bootstrap Dropdowns" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapDropdowns;
