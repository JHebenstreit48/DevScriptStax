import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Multiprocessing = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Concurrency/Multiprocessing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multiprocessing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Multiprocessing;
