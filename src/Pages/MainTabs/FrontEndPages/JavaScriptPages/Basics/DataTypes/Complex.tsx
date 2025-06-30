import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const ComplexDataTypes = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/DataTypes';

    return (

        <>
            <Header text="Complex Types & Type Checking" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ComplexDataTypes;
