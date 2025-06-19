import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const ParamsAndArgs = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/ParamsAndArgs";

    return (
        <>
            <Header text="Parameters and Arguments" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ParamsAndArgs;
