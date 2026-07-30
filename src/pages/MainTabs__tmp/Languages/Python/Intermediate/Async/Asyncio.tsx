import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Asyncio = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/Async/Asyncio';

  return (
    <>
      <PageLayout>
        <PageTitle title="Asyncio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Asyncio;
