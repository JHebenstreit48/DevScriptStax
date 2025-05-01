import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const BootstrapTooltips = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Tooltips.md';

    return (

        <>
            <Header text="Bootstrap Tooltips" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapTooltips;
