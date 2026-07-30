import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
