import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
