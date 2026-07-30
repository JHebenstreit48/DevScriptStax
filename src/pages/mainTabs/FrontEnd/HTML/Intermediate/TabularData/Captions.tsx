import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Captions = () => {
    const markdownFilePath = 'FrontEnd/HTMLNotes/Intermediate/TabularData/Captions';

    return (
        <>
            <PageLayout>
            <PageTitle title="Captions and Groups" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Captions;