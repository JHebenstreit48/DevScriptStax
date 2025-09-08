import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const DynamicImports = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Advanced/JSModules/Overview';

    return (

        <>
            <Header text="JavaScript Modules Overview" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default DynamicImports;
