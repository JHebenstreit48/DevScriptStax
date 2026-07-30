import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Compass = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/GUIAndCLI/Compass';

    return (
        <>
            <PageLayout>
            <PageTitle title="MongoDB Tools - Compass GUI" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Compass;