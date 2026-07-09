import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuiltInMethods = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/BuiltInMethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Core Concepts - Built-In Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuiltInMethods;