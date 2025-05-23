import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Testing = () => {
    const markdownFilePath = '/TestingNotes/Testing';
    return (

        <>

            <Header text="Testing" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Testing;
