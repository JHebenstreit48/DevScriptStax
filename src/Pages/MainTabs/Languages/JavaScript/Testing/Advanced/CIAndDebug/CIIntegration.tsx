import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
