import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Lifetimes = () => {
  const markdownFilePath = 'Languages/Rust/Basics/MemoryAndErrors/Lifetimes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lifetimes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lifetimes;
