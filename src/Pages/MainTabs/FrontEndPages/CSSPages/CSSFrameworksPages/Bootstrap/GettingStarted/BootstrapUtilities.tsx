import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const BootstrapUtilities = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Frameworks/GettingStarted/BootstrapUtilities';

    return (

        <>
            <Header text="Bootstrap Utilities" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BootstrapUtilities;
