import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestBlockStructure = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/TestBlockStructure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Test Block Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestBlockStructure;
