import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Fundamentals/Introduction';

    return (
        <>
            <PageLayout>
            <PageTitle title="Introduction to MongoDB" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Introduction;