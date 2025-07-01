import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const BuiltInMethods = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/BuiltInMethods';

    return (

        <>
            <Header text="JavaScript Built-In Methods" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BuiltInMethods;
