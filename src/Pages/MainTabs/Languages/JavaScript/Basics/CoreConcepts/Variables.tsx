import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Variables = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/Variables';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Core Concepts - Variables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Variables;