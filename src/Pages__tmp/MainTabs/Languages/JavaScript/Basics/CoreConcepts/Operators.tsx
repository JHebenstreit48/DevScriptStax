import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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