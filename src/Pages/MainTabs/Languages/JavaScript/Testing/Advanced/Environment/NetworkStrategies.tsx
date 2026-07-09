import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkStrategies = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Environment/NetworkStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkStrategies;
