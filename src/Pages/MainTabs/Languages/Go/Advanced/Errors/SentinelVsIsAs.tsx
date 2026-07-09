import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
