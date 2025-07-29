import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Metadata = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/HeadAndMetadata/Metadata.md";

    return (
        <>
            <PageLayout>
            <Header text="Metadata" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Metadata;
