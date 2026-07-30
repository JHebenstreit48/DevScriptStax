import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
