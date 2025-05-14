import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ParamsAndArgs = () => {
    const markdownFilePath = "/FrontEndPages/JavaScriptPages/Basics/FunctionsNotes/ParamsAndArgs";

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
