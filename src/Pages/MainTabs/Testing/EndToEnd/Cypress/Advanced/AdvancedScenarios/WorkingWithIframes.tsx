import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkingWithIframes = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/AdvancedScenarios/WorkingWithIframes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Working with iframes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithIframes;
