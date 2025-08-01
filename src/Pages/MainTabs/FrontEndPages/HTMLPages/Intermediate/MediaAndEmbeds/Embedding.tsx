import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Embedding = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/MediaAndEmbeds/Embedding.md";

    return (
        <>
            <PageLayout>
            <Header text="Embedding Content" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Embedding;
