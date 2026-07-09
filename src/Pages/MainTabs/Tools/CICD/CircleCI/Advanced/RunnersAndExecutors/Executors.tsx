import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Executors = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/RunnersAndExecutors/Executors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Executors (Docker/Machine)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Executors;
