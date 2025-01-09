import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const MongoDBCode = () => {
    const markdownFilePath = "/MongoDB/MongoDBCode.md";

    return (

        <>
            <Header text="MongoDB Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );

};

export default MongoDBCode;
