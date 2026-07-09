import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
