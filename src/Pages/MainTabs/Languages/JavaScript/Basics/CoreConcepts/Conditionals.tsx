import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Conditionals = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/Conditionals';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Core Concepts - Conditionals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Conditionals;