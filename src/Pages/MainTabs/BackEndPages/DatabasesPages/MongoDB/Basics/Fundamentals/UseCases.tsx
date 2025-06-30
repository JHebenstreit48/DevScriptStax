import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const UseCases = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/MongoDB/Basics/Fundamentals/UseCases';

    return (
        <>
            <PageLayout>
            <Header text="Use Cases" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default UseCases;
