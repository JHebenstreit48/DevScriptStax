import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnitAndIntegrationTesting = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Testing/UnitAndIntegrationTesting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unit & Integration Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnitAndIntegrationTesting;
