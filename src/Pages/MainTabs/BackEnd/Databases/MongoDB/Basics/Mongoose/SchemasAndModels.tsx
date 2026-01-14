import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SchemasAndModels = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Schemas';

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title=" Mongoose - Schemas and Models" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default SchemasAndModels;