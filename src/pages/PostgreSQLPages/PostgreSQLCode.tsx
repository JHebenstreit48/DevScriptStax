import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const PostgreSQLCode = () => {
    const markdownFilePath = '/PostgreSQL/PostgreSQLCode.md';

    return (

        <>

            <Header text="PostgreSQL Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default PostgreSQLCode;
