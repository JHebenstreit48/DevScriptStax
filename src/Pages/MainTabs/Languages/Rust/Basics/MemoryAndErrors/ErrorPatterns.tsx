import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorPatterns = () => {
  const markdownFilePath = 'Languages/Rust/Basics/MemoryAndErrors/ErrorPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Error Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorPatterns;
