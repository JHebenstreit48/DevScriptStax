import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModulesSyntax = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Advanced/JSModules/Syntax';

    return (

        <>
            <Header text="JavaScript Import/Export Syntax" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default ModulesSyntax;
