import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const BootstrapButtons = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/BootstrapComponents/Buttons';

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
