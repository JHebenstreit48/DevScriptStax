import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const PathsAliases = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Advanced/JSModules/PathsAndAliases';

    return (

        <>
            <Header text="Import Paths and Aliases" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default PathsAliases;
