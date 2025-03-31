import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

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
