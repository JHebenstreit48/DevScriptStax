import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const TypeScriptCode = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScriptCode';

    return (

        <>

            <Header text="TypeScript Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default TypeScriptCode;
