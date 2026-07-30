import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
