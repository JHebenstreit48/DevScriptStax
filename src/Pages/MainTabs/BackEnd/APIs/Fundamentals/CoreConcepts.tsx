import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoreConcepts = () => {
  const markdownFilePath = 'BackEndNotes/APINotes/Basics/Fundamentals/CoreConcepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title=" API Fundamentals - Core Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreConcepts;