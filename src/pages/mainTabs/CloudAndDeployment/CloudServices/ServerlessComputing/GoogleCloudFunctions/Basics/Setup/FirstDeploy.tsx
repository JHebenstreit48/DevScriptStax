import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FirstDeploy = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Setup/FirstDeploy';

  return (
    <>
      <PageLayout>
        <PageTitle title="First Deploy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirstDeploy;
