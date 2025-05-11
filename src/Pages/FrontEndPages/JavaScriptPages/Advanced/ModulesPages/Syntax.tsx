import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ModulesSyntax = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Advanced/JSModules/Syntax.md";

    return (

        <>
            <Header text="JavaScript Import/Export Syntax" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ModulesSyntax;
