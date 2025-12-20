import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncioPatterns = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Concurrency/AsyncioPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Asyncio Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncioPatterns;
