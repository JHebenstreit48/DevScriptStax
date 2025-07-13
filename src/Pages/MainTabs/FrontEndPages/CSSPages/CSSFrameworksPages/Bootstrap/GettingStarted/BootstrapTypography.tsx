import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapTypography = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapTypography';

    return (

        <>
            <Header text="Bootstrap Typography" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapTypography;
