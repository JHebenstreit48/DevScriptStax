import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VisitGet = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/CoreCommands/VisitGet';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cypress Core Commands - Visit & Get" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VisitGet;