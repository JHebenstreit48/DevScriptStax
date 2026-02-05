import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Atlas = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/GUIAndCLI/Atlas';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="MongoDB Tools - Atlas" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Atlas;