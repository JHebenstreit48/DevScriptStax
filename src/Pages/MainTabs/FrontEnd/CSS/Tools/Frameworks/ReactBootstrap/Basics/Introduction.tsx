import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactBootstrapIntro = () => {
    const markdownFilePath = 'FrontEnd/CSS/Frameworks/ReactBootstrap/Basics/Introduction';

    return (
        <>
            <Header text="React Bootstrap Introduction" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default ReactBootstrapIntro;
