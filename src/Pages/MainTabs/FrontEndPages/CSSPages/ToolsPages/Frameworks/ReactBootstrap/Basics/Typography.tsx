import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactBSTypography = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/ReactBootstrap/Basics/Typography';

    return (
        <>
            <Header text="React Bootstrap Typography" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default ReactBSTypography;
