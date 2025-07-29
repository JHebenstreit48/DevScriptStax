import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapGrid = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapGrid';

    return (

        <>
            <Header text="Bootstrap Grid" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapGrid;
