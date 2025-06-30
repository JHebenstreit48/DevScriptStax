import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HigherOrder = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/HigherOrder';

    return (
        <>
            <Header text="Higher-Order Functions" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default HigherOrder;
