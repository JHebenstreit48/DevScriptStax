import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
