import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostgreSQL = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/PostgreSQLNotes/PostgreSQL';

    return (

        <>
            <Header text="PostgreSQL" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default PostgreSQL;
