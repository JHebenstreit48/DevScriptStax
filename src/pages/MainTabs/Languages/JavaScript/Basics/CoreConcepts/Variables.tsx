import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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