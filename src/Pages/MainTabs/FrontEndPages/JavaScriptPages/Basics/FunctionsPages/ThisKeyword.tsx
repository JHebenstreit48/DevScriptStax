import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const ThisKeyword = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/ThisKeyword';

    return (

        <>
            <Header text="This Keyword" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default ThisKeyword;
