import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WaitingAndTimeouts = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/UtilitiesAndNavigation/WaitingAndTimeouts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Waiting & Timeouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WaitingAndTimeouts;
