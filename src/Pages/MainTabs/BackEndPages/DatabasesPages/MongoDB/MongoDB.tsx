import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

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
