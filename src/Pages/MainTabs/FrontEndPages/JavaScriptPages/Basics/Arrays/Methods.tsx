import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Methods = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/Arrays/Methods';

    return (

        <>
            <Header text="Arrays Methods" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Methods;
