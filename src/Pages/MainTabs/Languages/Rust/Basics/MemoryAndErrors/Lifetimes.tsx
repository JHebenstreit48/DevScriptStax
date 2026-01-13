import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Lifetimes = () => {
  const markdownFilePath = 'Languages/Rust/Basics/MemoryAndErrors/Lifetimes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lifetimes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lifetimes;
