import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Promises = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Intermediate/ModernES6/Promises';

    return (

        <>
            <Header text="JS Promises and Async/Await" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Promises;
