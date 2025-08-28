import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Nuances = () => {
    const markdownFilePath = 'ToolsNotes/Containerization/GitNotes/Basics/Workflow/Nuances';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Git Workflow Nuances" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Nuances;