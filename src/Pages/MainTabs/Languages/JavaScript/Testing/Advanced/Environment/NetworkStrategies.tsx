import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkStrategies = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Environment/NetworkStrategies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkStrategies;
