import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const PathsAliases = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Advanced/JSModules/PathsAndAliases.md";

    return (

        <>
            <Header text="Import Paths and Aliases" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PathsAliases;
