import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const BootstrapButtons = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Buttons.md';

    return (

        <>
            <Header text="Bootstrap Buttons" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapButtons;
