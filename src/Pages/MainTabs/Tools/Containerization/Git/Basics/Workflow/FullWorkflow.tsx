import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Workflow = () => {
    const markdownFilePath = "Tools/Containerization/Git/Basics/Workflow/FullWorkflow";

    return (
        <>
            <PageLayout>
            <PageTitle title="Git Full Workflow" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Workflow;