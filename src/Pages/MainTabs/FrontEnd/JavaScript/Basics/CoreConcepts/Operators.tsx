import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const Operators = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreConcepts/Operators';

    return (

        <>
            <Header text="JavaScript Operators" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Operators;
