import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const MediaElements = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/MediaAndEmbeds/Media.md";

    return (
        <>
            <PageLayout>
            <Header text="Media Elements" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default MediaElements;
