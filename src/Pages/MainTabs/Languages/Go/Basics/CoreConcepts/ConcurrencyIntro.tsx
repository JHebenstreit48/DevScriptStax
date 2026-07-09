import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConcurrencyIntro = () => {
  const markdownFilePath = 'Languages/Go/Basics/CoreConcepts/ConcurrencyIntro';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concurrency Intro" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConcurrencyIntro;
