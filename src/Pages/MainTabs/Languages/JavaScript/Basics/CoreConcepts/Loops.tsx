import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Loops = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/Loops';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Core Concepts - Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Loops;