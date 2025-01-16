import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Typescript = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScript.md';

    return (

        <>
            <Header text="TypeScript" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default Typescript;
