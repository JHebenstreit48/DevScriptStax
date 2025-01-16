import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const MongoDBCode = () => {
    const markdownFilePath = "/MongoDB/MongoDBCode.md";

    return (

        <>
            <Header text="MongoDB Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default MongoDBCode;
