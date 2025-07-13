import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Advanced = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/Arrays/Advanced';

    return (

        <>
            <Header text="Arrays Advanced Techniques" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Advanced;
