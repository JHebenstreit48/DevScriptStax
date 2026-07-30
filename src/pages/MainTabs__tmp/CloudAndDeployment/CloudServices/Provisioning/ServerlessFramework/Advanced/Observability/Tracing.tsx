import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Tracing = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/ServerlessFramework/Advanced/Observability/Tracing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tracing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tracing;
