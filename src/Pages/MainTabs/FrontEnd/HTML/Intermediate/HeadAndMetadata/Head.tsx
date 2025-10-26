import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';
import PageTitle from '@/Components/PageComponents/PageTitle';

const HeadElements = () => {
    const markdownFilePath = 'FrontEnd/HTMLNotes/Intermediate/HeadAndMetadata/Head';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Head Elements" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default HeadElements;
