import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WAFAndControls = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/SecurityAndAccess/WAFAndControls';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="WAF & Controls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WAFAndControls;
