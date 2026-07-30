import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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