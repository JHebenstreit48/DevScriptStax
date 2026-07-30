import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomBuild = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/ServerlessFramework/Advanced/Packaging/CustomBuild';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Build" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomBuild;
