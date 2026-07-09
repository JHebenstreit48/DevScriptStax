import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BSONAndObject = () => {
    const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Fundamentals/BSONAndObject';

    return (
        <>
            <PageLayout>
            <PageTitle title=" MongoDB - BSON and ObjectId" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default BSONAndObject;