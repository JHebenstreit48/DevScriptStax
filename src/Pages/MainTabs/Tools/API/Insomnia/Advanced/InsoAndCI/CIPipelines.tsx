import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CIPipelines = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/InsoAndCI/CIPipelines';

  return (
    <>
      <PageLayout>
        <PageTitle title="CI Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CIPipelines;
