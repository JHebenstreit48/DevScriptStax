import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
