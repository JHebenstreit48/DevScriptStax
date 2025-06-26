import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const PostgreSQLCode = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/PostgreSQL/PostgreSQLCode';

    return (

        <>

            <Header text="PostgreSQL Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default PostgreSQLCode;
