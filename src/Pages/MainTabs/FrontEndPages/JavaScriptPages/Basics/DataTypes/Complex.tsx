import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header";

const ComplexDataTypes = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/DataTypes';

    return (

        <>
            <Header text="Complex Types & Type Checking" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default ComplexDataTypes;
