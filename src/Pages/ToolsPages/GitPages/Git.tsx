import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Git = () => {
    const markdownFilePath = '/GitNotes/Git.md';

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
