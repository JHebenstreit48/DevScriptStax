import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapAccordions = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Accordions';

    return (

        <>
            <Header text="Bootstrap Accordions" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapAccordions;
