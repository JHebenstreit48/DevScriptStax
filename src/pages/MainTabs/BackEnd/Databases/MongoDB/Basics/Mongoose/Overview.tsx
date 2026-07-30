import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Overview = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Overview';

    return (
        <>
            <PageLayout>
            <PageTitle title="MongoDB - Mongoose - Overview" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Overview;