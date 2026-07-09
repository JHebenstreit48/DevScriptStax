import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PopulateAndRelationships = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Populate';

  return (
    <>
      <PageLayout>
        <PageTitle title="Populate & Relationships" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PopulateAndRelationships;