import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapAlerts = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Alerts';

    return (

        <>
            <Header text="Bootstrap Alerts" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapAlerts;
