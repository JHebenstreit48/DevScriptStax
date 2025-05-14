import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

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
