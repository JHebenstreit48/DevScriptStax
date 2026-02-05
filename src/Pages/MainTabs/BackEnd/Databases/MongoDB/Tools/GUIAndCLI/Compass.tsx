import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Compass = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/GUIAndCLI/Compass';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="MongoDB Tools - Compass GUI" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Compass;