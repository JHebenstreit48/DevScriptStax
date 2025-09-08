import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const HigherOrder = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/HigherOrder';

    return (
        <>
            <Header text="Higher-Order Functions" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default HigherOrder;
