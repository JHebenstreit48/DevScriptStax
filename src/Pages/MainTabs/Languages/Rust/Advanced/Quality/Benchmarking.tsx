import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Benchmarking = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Quality/Benchmarking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Benchmarking (criterion)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Benchmarking;
