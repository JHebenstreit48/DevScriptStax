import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AsyncioPatterns = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Concurrency/AsyncioPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Asyncio Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncioPatterns;
