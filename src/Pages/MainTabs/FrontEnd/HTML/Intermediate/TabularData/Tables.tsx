import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Tables = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/TabularData/Tables";

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Tables" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Tables;