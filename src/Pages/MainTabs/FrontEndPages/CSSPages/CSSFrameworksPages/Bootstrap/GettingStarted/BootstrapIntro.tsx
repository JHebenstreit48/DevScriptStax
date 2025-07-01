import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const BootstrapIntro = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapIntro';

    return (

        <>
            <Header text="Bootstrap Introduction" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapIntro;
