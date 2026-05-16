import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommandsAndChaining = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/CommandsAndChaining';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Commands & Chaining" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommandsAndChaining;
