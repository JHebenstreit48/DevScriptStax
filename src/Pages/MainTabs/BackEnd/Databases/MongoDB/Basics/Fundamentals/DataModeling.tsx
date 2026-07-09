import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataModeling = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Fundamentals/DataModeling';

    return (
        <>
            <PageLayout>
            <PageTitle title="Data Modeling in MongoDB" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default DataModeling;