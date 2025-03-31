import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const MongoDB = () => {
    const markdownFilePath = "/MongoDB/MongoDB.md";

    return (

        <>

            <Header text="MongoDB" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default MongoDB;
