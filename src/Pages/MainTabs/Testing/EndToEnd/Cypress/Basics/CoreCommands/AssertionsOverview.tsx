import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssertionsOverview = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/CoreCommands/AssertionsOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Assertions Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssertionsOverview;
