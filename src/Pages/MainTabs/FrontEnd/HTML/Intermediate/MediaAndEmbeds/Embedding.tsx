import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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