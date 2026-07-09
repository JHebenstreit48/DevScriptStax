import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
