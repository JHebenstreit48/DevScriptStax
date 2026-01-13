import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VisualTesting = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/VisualAndPerf/VisualTesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Visual Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VisualTesting;
