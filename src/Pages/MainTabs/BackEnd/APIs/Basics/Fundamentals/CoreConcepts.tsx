import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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