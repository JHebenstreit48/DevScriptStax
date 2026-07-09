import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Commands = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/ShellAndServer/Commands';

    return (
        <>
            <PageLayout>
            <PageTitle title="MongoDB Tools - Commands" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Commands;