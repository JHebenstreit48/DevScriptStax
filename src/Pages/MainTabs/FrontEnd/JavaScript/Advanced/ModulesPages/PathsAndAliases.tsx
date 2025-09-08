import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

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
