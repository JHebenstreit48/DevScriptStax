import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const BootstrapCards = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/BootstrapComponents/Cards';

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
