import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitNuances = () => {
    const markdownFilePath = 'ToolsNotes/Containerization/GitNotes/Basics/Workflow/Nuances';

    return (
        <>
            <PageLayout>
            <Header text="Nuances" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default GitNuances;
