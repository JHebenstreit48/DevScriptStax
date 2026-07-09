import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnderstandingEndpoints = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/EndpointsAndResources/UnderstandingEndpoints';

  return (
    <>
      <PageLayout>
        <PageTitle title="Understanding Endpoints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingEndpoints;
