import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactBoostrapGrid = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/ReactBootstrap/Basics/GridSystem';

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
