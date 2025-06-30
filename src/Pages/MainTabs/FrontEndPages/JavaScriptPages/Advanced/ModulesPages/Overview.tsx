import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const ModulesOverview = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Advanced/JSModules/Overview';

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
