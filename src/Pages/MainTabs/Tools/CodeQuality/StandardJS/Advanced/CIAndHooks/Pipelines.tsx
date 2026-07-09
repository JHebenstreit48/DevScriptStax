import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Pipelines = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/CIAndHooks/Pipelines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pipelines;
