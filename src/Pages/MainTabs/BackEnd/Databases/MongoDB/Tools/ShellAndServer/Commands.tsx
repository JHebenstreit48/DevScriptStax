import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Commands = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/ShellAndServer/Commands';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="MongoDB Tools - Commands" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Commands;