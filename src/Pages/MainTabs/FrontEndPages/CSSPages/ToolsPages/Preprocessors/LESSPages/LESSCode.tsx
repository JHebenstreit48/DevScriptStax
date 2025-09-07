import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

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
