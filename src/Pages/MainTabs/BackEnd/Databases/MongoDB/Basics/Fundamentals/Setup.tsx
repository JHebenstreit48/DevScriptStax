import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Setup = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Fundamentals/Setup';

    return (
        <>
            <PageLayout>
            <PageTitle title="MongoDB Project Setup" />
            
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Setup;