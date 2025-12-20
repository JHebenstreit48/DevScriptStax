import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Multiprocessing = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Concurrency/Multiprocessing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Multiprocessing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Multiprocessing;
