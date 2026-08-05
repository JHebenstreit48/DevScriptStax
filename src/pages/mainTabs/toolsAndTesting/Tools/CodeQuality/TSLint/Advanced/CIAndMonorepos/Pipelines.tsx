import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Pipelines = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/CIAndMonorepos/Pipelines';

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
