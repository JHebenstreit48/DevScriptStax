import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Setup = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/MongoDB/Basics/Fundamentals/Setup';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="MongoDB Project Setup" />
            
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Setup;