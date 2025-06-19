import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const ModulesSyntax = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Advanced/JSModules/Syntax";

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
