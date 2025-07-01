import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const LESSCode = () => {
    const markdownFilePath = '/LESSNotes/LESSCode';

    return (

        <>

            <Header text="LESS" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default LESSCode;
