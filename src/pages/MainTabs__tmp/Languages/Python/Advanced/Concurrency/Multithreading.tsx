import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
