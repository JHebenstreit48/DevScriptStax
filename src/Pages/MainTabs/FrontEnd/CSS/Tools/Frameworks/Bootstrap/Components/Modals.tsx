import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapModals = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/BootstrapComponents/Modals';

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
