import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Vitest = () => {
    const markdownFilePath = '/VitestNotes/Vitest.md';

    return (

        <>
            <Header text="Vitest" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vitest;
