import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ResultAndOption = () => {
  const markdownFilePath = 'Languages/Rust/Basics/MemoryAndErrors/ResultAndOption';

  return (
    <>
      <PageLayout>
        <PageTitle title="Result & Option" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResultAndOption;
