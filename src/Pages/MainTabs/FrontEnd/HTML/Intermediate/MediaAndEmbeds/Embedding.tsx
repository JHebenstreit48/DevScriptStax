import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Embedding = () => {
    const markdownFilePath = 'FrontEnd/HTMLNotes/Intermediate/MediaAndEmbeds/Embedding';

    return (
        <>
            <PageLayout>
            <PageTitle title="Embedding Content" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Embedding;