import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const FunctionBasics = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/BasicsAndDeclare';

    return (
        <>
            <Header text="Basics" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default FunctionBasics;
