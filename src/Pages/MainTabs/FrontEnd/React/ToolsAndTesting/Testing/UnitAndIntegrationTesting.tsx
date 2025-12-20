import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnitAndIntegrationTesting = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Testing/UnitAndIntegrationTesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Unit & Integration Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnitAndIntegrationTesting;
