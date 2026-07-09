import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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