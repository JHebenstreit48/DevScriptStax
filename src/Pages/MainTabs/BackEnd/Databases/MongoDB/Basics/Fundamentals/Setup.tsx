import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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