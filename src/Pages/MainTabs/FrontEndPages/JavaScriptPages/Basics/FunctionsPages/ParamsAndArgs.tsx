import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParamsAndArgs = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/ParamsAndArgs';

    return (
        <>
            <Header text="Parameters and Arguments" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default ParamsAndArgs;
