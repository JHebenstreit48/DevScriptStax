import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CIIntegration = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/CIAndDebug/CIIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="CI Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CIIntegration;
