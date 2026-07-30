import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WAFAndControls = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/FastlyCompute/Advanced/SecurityAndAccess/WAFAndControls';

  return (
    <>
      <PageLayout>
        <PageTitle title="WAF & Controls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WAFAndControls;
