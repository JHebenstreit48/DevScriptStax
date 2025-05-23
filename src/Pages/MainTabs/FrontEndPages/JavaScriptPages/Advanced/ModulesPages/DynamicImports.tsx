import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const DynamicImports = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Advanced/JSModules/Overview";

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

export default DynamicImports;
