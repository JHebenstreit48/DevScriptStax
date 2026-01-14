import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PopulateAndRelationships = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Populate';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Populate & Relationships" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PopulateAndRelationships;