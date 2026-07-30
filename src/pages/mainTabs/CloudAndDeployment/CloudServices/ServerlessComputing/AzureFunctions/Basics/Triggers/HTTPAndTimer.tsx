import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPAndTimer = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AzureFunctions/Basics/Triggers/HTTPAndTimer';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP & Timer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPAndTimer;
