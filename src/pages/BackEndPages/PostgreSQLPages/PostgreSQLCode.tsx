import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

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
