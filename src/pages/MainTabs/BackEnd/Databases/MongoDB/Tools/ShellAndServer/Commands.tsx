import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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