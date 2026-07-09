import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const URLStructureAndParameters = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/EndpointsAndResources/URLStructureAndParameters';

  return (
    <>
      <PageLayout>
        <PageTitle title="URL Structure & Parameters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default URLStructureAndParameters;
