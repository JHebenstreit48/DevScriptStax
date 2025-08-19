import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitWorkflow = () => {
    const markdownFilePath = "ToolsNotes/Containerization/GitNotes/Basics/Workflow/FullWorkflow";

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Git Full Workflow" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default GitWorkflow;
