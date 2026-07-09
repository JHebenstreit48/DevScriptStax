import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TestBlockStructure = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/TestBlockStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Test Block Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestBlockStructure;
