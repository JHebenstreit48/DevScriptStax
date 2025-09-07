import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactBoostrapGrid = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/ReactBootstrap/Basics/GridSystem';

    return (
        <>
            <Header text="React Bootstrap Grid" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default ReactBoostrapGrid;
