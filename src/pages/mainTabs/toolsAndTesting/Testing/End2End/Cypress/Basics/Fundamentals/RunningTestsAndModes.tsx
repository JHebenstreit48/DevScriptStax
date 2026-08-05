import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RunningTestsAndModes = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Fundamentals/FirstTest';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress Basics - Running Tests & Modes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RunningTestsAndModes;
