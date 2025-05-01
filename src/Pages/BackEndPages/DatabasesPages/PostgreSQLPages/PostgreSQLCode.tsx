import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const PostgreSQLCode = () => {
    const markdownFilePath = '/PostgreSQL/PostgreSQLCode.md';

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
