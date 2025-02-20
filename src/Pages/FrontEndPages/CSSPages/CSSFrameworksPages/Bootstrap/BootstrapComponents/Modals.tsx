import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const BootstrapModals = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Modals.md';

    return (

        <>
            <Header text="Bootstrap Modals" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapModals;
