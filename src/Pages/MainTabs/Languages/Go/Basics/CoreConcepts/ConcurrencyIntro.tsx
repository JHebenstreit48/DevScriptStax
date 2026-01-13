import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConcurrencyIntro = () => {
  const markdownFilePath = 'Languages/Go/Basics/CoreConcepts/ConcurrencyIntro';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Concurrency Intro" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConcurrencyIntro;
