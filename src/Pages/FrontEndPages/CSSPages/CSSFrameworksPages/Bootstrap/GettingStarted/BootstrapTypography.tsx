import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const BootstrapTypography = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapTypography.md';

    return (

        <>
            <Header text="Bootstrap Typography" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapTypography;
