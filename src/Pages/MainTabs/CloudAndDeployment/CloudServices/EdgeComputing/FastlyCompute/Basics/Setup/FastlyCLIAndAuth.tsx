import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FastlyCLIAndAuth = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Setup/FastlyCLIAndAuth';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fastly CLI & Auth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FastlyCLIAndAuth;
