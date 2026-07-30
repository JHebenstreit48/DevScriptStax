import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorPatterns = () => {
  const markdownFilePath = 'Languages/Rust/Basics/MemoryAndErrors/ErrorPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorPatterns;
