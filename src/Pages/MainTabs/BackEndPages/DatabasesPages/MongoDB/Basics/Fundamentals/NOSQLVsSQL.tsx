import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const NOSQLVsSQL = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/MongoDB/Basics/Fundamentals/NOSQLVsSQL';

    return (
        <>
            <PageLayout>
            <Header text="NOSQL vs. SQL" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default NOSQLVsSQL;
