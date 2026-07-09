import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FunctionsAndModules = () => {
  const markdownFilePath = 'Languages/Python/Basics/CoreConcepts/FunctionsAndModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Functions and Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FunctionsAndModules;
