import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header";

const Loops = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/CoreConcepts/Loops';

    return (

        <>
            <Header text="JavaScript Loops" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Loops;
