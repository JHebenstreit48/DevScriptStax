import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WorkingWithFixtures = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/TestWritingPatterns/WorkingWithFixtures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Working with Fixtures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithFixtures;
