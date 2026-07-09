import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
