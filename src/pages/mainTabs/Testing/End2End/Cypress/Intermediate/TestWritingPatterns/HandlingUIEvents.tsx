import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HandlingUIEvents = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/TestWritingPatterns/HandlingUIEvents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Handling UI Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandlingUIEvents;
