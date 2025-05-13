import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

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
