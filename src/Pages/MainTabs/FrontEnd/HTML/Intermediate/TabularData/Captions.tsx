import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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