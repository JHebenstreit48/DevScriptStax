import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapModals = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Modals';

    return (

        <>
            <Header text="Bootstrap Modals" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapModals;
