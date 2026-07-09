import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Multithreading = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Concurrency/Multithreading';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multithreading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Multithreading;
