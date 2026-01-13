import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const URLStructureAndParameters = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/EndpointsAndResources/URLStructureAndParameters';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="URL Structure & Parameters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default URLStructureAndParameters;
