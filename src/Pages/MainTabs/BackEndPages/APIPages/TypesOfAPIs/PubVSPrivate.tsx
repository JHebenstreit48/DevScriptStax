import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const PublicVSPrivate = () => {
    const markdownFilePath = 'BackEndNotes/APINotes/TypesOfAPIs/PublicVSPrivate.md';

    return (
        <>

            <Header text="Public vs. Private APIs" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default PublicVSPrivate;
