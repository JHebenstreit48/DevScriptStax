import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Captions = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/TabularData/Captions.md";

    return (
        <>
            <PageLayout>
            <Header text="Captions/Groups" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Captions;
