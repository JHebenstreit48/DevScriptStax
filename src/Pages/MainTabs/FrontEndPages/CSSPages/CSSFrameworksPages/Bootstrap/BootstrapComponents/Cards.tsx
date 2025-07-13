import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapCards = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Cards';

    return (

        <>
            <Header text="Bootstrap Cards" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapCards;
