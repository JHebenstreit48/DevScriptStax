import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header";

const PostgreSQLCode = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/PostgreSQL/PostgreSQLCode';

    return (

        <>

            <Header text="PostgreSQL Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default PostgreSQLCode;
