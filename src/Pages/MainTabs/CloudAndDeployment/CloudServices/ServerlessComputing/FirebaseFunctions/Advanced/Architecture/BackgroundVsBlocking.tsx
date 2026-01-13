import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BackgroundVsBlocking = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Architecture/BackgroundVsBlocking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Background vs Blocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackgroundVsBlocking;
