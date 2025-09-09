import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const BuiltInMethods = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreConcepts/BuiltInMethods';

    return (

        <>
            <Header text="JavaScript Built-In Methods" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default BuiltInMethods;
