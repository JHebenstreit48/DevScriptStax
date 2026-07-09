import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreConcepts = () => {
  const markdownFilePath = 'BackEnd/API/Basics/Fundamentals/CoreConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title=" API Fundamentals - Core Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreConcepts;