import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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