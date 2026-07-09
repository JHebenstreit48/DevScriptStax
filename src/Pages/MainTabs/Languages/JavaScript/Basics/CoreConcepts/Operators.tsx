import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Operators = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/Operators';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Core Concepts - Operators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Operators;