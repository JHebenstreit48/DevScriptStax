import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
