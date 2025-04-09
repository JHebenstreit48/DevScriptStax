import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Testing = () => {
    const markdownFilePath = '/TestingNotes/Testing.md';
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
