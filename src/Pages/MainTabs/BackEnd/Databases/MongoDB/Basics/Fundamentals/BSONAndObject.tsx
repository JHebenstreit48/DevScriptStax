import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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