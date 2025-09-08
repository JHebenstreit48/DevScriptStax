import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Captions = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/TabularData/Captions";

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Captions and Groups" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Captions;