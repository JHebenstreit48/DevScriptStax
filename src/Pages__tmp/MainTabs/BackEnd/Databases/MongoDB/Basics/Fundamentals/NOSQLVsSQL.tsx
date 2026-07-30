import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NOSQLVsSQL = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Fundamentals/NoSQLVsSQL';

    return (
        <>
            <PageLayout>
            <PageTitle title="MongoDB - Differences between SQL and NoSQL" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default NOSQLVsSQL;