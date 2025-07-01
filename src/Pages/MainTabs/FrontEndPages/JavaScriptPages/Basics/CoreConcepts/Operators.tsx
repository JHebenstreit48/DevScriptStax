import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const Operators = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/Operators';

    return (

        <>
            <Header text="JavaScript Operators" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Operators;
