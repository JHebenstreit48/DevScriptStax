import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Asyncio = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/Async/Asyncio';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Asyncio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Asyncio;
