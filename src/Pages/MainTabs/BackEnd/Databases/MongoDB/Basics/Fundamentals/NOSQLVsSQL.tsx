import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NOSQLVsSQL = () => {
    const markdownFilePath = 'BackEndNotes/Databases/MongoDB/Basics/Fundamentals/NoSQLVsSQL';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="MongoDB - Differences between SQL and NoSQL" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default NOSQLVsSQL;