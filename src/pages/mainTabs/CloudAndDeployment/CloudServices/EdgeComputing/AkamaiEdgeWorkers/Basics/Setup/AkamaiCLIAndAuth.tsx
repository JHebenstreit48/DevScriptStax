import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AkamaiCLIAndAuth = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Setup/AkamaiCLIAndAuth';

  return (
    <>
      <PageLayout>
        <PageTitle title="Akamai CLI & Auth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AkamaiCLIAndAuth;
