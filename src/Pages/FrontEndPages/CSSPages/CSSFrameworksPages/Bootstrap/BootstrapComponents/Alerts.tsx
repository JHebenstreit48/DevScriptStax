import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const BootstrapAlerts = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Alerts.md';

    return (

        <>
            <Header text="Bootstrap Alerts" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default BootstrapAlerts;
