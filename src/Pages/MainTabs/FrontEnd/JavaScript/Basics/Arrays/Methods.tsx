import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Methods = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/Arrays/Methods';

    return (

        <>
            <Header text="Arrays Methods" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Methods;
