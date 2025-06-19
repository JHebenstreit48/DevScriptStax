import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const GitWorkflow = () => {
    const markdownFilePath = "ToolsNotes/Containerization/GitNotes/Basics/Workflow/FullWorkflow";

    return (
        <>
            <PageLayout>
            <Header text="Full Workflow" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default GitWorkflow;
