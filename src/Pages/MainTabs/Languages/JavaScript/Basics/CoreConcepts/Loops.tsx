import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Loops = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/Loops';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Core Concepts - Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Loops;