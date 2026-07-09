import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueryVsPathParameters = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/EndpointsAndResources/QueryVsPathParameters';

  return (
    <>
      <PageLayout>
        <PageTitle title="Query vs Path Parameters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueryVsPathParameters;
