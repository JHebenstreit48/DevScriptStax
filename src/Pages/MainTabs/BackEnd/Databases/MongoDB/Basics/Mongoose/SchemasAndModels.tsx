import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SchemasAndModels = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Schemas';

    return (
        <>
            <PageLayout>
            <PageTitle title=" Mongoose - Schemas and Models" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default SchemasAndModels;