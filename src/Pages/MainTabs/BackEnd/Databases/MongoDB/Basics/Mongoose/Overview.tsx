import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Overview = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Overview';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="MongoDB - Mongoose - Overview" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Overview;