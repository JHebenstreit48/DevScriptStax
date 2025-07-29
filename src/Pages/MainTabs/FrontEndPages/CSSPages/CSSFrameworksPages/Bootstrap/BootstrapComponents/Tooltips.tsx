import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapTooltips = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Tooltips';

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
