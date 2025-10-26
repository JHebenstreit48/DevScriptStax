import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapTooltips = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/BootstrapComponents/Tooltips';

    return (

        <>
            <Header text="Bootstrap Tooltips" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapTooltips;
