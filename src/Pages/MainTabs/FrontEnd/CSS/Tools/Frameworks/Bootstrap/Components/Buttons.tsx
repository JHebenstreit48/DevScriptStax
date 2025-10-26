import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapButtons = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/BootstrapComponents/Buttons';

    return (

        <>
            <Header text="Bootstrap Buttons" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapButtons;
