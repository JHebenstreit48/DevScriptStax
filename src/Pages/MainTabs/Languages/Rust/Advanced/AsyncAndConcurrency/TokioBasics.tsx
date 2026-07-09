import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TokioBasics = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/AsyncAndConcurrency/TokioBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tokio Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TokioBasics;
