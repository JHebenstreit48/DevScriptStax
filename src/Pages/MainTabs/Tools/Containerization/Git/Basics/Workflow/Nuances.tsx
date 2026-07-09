import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Nuances = () => {
    const markdownFilePath = 'Tools/Containerization/Git/Basics/Workflow/Nuances';

    return (
        <>
            <PageLayout>
            <PageTitle title="Git Workflow Nuances" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Nuances;