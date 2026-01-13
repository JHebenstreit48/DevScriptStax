import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResultAndOption = () => {
  const markdownFilePath = 'Languages/Rust/Basics/MemoryAndErrors/ResultAndOption';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Result & Option" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResultAndOption;
