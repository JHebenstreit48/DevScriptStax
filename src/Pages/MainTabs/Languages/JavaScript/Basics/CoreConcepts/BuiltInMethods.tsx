import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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