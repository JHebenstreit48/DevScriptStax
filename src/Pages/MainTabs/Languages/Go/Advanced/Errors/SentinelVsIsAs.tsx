import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SentinelVsIsAs = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Errors/SentinelVsIsAs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sentinel vs Is/As" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SentinelVsIsAs;
