import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ModulesOverview = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Advanced/JSModules/Overview.md";

    return (

        <>
            <Header text="JavaScript Modules Overview" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ModulesOverview;
