import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const MongoDB = () => {
    const markdownFilePath = "/MongoDB/MongoDB.md";

    return (

        <>

            <Header text="MongoDB" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default MongoDB;
