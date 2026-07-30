import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NetworkStrategies = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Environment/NetworkStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkStrategies;
