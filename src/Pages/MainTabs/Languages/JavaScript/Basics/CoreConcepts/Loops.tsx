import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Loops = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/Loops';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Core Concepts - Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Loops;