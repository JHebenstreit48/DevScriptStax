import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapDropdowns = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Dropdowns';

    return (

        <>
            <Header text="Bootstrap Dropdowns" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapDropdowns;
