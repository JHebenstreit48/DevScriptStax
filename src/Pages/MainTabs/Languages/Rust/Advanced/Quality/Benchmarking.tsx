import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Benchmarking = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Quality/Benchmarking';

  return (
    <>
      <PageLayout>
        <PageTitle title="Benchmarking (criterion)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Benchmarking;
