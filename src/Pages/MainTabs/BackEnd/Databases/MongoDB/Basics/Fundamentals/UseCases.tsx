import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseCases = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Fundamentals/UseCases';

    return (
        <>
            <PageLayout>
            <PageTitle title="Use Cases for MongoDB" />
            
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default UseCases;