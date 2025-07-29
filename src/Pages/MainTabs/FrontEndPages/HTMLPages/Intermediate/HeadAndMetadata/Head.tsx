import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const HeadElements = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/HeadAndMetadata/Head.md";

    return (
        <>
            <PageLayout>
            <Header text="Head Elements" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default HeadElements;
