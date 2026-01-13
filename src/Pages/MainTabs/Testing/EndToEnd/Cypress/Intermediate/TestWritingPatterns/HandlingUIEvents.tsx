import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HandlingUIEvents = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/TestWritingPatterns/HandlingUIEvents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Handling UI Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandlingUIEvents;
