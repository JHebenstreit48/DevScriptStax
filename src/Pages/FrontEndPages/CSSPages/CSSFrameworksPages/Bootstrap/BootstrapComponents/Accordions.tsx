import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const BootstrapAccordions = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Accordions.md';

    return (

        <>
            <Header text="Bootstrap Accordions" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapAccordions;
