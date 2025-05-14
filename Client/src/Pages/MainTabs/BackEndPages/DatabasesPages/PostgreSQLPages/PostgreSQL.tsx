import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const PostgreSQL = () => {
    const markdownFilePath = '/BackEndNotes/PostgreSQLNotes/PostgreSQL.md';

    return (

        <>
            <Header text="PostgreSQL" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PostgreSQL;
