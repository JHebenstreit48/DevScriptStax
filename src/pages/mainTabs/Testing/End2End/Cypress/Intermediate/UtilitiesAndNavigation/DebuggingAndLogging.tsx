import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DebuggingAndLogging = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/UtilitiesAndNavigation/DebuggingAndLogging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugging & Logging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingAndLogging;
