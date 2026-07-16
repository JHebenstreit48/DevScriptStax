import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BackgroundVsBlocking = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Architecture/BackgroundVsBlocking';

  return (
    <>
      <PageLayout>
        <PageTitle title="Background vs Blocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackgroundVsBlocking;
