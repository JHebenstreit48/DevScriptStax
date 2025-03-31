import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const PublicVSPrivate = () => {
    const markdownFilePath = '/BackEndNotes/APINotes/TypesOfAPIs/PublicVSPrivate.md';

    return (
        <>

            <Header text="Public vs. Private APIs" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default PublicVSPrivate;
