import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const MongoDBIntro = () => {
    const markdownFilePath = 'BackEndNotes/DatabaseNotes/MongoDB/Basics/Fundamentals/Introduction';

    return (
        <>
            <PageLayout>
            <Header text="Introduction" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default MongoDBIntro;
