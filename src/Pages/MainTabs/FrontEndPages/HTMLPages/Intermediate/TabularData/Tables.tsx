import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Tables = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/Intermediate/TabularData/Tables.md";

    return (
        <>
            <PageLayout>
            <Header text="Tables" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Tables;
