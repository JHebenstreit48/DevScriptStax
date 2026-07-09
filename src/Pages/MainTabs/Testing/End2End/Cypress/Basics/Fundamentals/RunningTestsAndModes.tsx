import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
