import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

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
