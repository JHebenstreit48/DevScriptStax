import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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