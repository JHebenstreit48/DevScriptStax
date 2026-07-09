import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OOP = () => {
  const markdownFilePath = 'Languages/Python/Basics/CoreConcepts/OOP';

  return (
    <>
      <PageLayout>
        <PageTitle title="OOP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OOP;
