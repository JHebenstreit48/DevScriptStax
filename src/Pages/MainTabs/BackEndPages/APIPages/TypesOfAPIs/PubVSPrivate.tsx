import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const PublicVSPrivate = () => {
    const markdownFilePath = 'BackEndNotes/APINotes/TypesOfAPIs/PublicVSPrivate.md';

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
