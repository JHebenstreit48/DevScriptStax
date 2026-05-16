import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Assertions = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/Assertions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Assertions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Assertions;
