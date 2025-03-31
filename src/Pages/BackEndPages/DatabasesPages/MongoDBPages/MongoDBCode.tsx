import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const MongoDBCode = () => {
    const markdownFilePath = "/MongoDB/MongoDBCode.md";

    return (

        <>
            <Header text="MongoDB Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default MongoDBCode;
