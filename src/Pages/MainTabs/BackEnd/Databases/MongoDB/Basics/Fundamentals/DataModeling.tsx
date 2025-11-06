import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataModeling = () => {
    const markdownFilePath = 'BackEndNotes/Databases/MongoDB/Basics/Fundamentals/DataModeling';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Data Modeling in MongoDB" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default DataModeling;