import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MultiAccount = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSSAM/Advanced/Pipelines/MultiAccount';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multi-Account" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiAccount;
