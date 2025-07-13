import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExpressionsIIFE = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/ExpressionsIIFE';

    return (
        <>
            <Header text="Expressions & IIFE" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default ExpressionsIIFE;
