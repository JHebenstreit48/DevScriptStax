import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/ShellAndServer/Introduction';

    return (
        <>
            <PageLayout>
            <PageTitle title="MongoDB Tools - Introduction to Shell and Server" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Introduction;