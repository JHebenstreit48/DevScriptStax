import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomCypressCommands = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/TestWritingPatterns/CustomCypressCommands';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Cypress Commands" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomCypressCommands;
