import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Git = () => {
    const markdownFilePath = '/GitNotes/Git';

    return (

        <>
            <Header text="Git Notes" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Git;
