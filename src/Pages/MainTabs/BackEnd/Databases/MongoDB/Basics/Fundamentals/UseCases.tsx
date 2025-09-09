import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseCases = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/MongoDB/Basics/Fundamentals/UseCases';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Use Cases for MongoDB" />
            
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default UseCases;