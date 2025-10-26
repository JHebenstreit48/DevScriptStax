import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapDropdowns = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/BootstrapComponents/Dropdowns';

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
