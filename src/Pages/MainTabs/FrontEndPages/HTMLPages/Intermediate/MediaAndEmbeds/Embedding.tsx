import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Embedding = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/MediaAndEmbeds/Embedding";

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Embedding Content" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Embedding;