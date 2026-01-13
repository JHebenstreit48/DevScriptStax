import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModelRelationships = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ModelsAndDB/ModelRelationships';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Model Relationships" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelRelationships;
