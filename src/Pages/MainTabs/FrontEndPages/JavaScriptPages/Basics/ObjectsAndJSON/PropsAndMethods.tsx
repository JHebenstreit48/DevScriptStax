import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const PropsAndMethods = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/PropsAndMethods";

    return (
        <>
            <Header text="Properties and Methods" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default PropsAndMethods;
