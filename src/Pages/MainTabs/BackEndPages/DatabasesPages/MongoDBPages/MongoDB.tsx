import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const MongoDB = () => {
    const markdownFilePath = "BackEndNotes/DatabaseNotes/MongoDB/MongoDB";

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
