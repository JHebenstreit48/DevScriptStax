import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Typescript = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScript.md';

    return (

        <>
            <Header text="TypeScript" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Typescript;
