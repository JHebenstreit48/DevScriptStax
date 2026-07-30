import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Atlas = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/GUIAndCLI/Atlas';

    return (
        <>
            <PageLayout>
            <PageTitle title="MongoDB Tools - Atlas" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Atlas;