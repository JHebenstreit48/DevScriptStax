import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnderstandingEndpoints = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/EndpointsAndResources/UnderstandingEndpoints';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Understanding Endpoints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingEndpoints;
