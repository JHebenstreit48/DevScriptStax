import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapAccordions = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/BootstrapComponents/Accordions';

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
