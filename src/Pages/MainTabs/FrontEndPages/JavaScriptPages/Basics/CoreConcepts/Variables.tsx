import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const JSVariables = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreConcepts/Variables';

    return (

        <>
            <Header text="JavaScript Variables" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default JSVariables;
