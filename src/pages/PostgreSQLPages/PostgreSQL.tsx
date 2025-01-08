import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const PostgreSQL = () => {
    const markdownFilePath = '/PostgreSQL/PostgreSQL.md';

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
